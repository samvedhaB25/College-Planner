package com.collegeplanner.college_planner_backend;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class TranscriptService {

    private final Map<String, TranscriptJob> jobs = new ConcurrentHashMap<>();
    private final UserProfileService userProfileService;
    private final RestClient restClient = RestClient.create();
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public TranscriptService(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    public String startProcessing(String userId, MultipartFile file) {
        String jobId = UUID.randomUUID().toString();
        TranscriptJob job = new TranscriptJob(jobId, userId);
        jobs.put(jobId, job);

        byte[] fileBytes;
        try {
            fileBytes = file.getBytes();
        } catch (Exception e) {
            job.setStatus("FAILED");
            job.setErrorMessage("Could not read file");
            return jobId;
        }

        processAsync(job, fileBytes);
        return jobId;
    }

    @Async
    public void processAsync(TranscriptJob job, byte[] fileBytes) {
        job.setStatus("PROCESSING");
        try {
            String text = extractText(fileBytes);

            if (text == null || text.isBlank()) {
                job.setStatus("FAILED");
                job.setErrorMessage("Could not extract any text from this PDF. It may be a scanned image rather than text-based.");
                return;
            }

            job.setExtractedText(text);

            List<CollegeSuggestion> suggestions = getCollegeSuggestions(text);
            job.setCollegeSuggestions(suggestions);

            // Print statement to see output of AI call in terminal
            // System.out.println("=== COLLEGE SUGGESTIONS ===\n" + suggestions);

            job.setStatus("COMPLETE");
            userProfileService.markOnboardingComplete(job.getUserId());
        } catch (Exception e) {
            job.setStatus("FAILED");
            job.setErrorMessage(e.getMessage());
        }
    }

    private String extractText(byte[] fileBytes) throws Exception {
        try (PDDocument document = Loader.loadPDF(fileBytes)) {
            PDFTextStripper stripper = new PDFTextStripper();
            return stripper.getText(document);
        }
    }

    private String buildPrompt(String transcriptText) {
        return """
            You are a college admissions advisor. Based on the student's transcript below,
            suggest exactly 6 colleges: 2 Safety schools, 2 Target schools, and 2 Reach schools.

            Definitions:
            - Safety: student's academic profile exceeds typical admitted student, high likelihood of acceptance
            - Target: student's profile is a close match to typical admitted student
            - Reach: student's profile is below typical admitted student, but not impossible

            For each college, estimate the overall undergraduate acceptance rate using recent
            historical data (approximate is fine). Provide brief reasoning tied to specifics
            from the transcript (courses taken, activities, achievements).

            Transcript:
            %s

            Respond ONLY with valid JSON matching this exact structure, no other text:
            {
              "colleges": [
                { "name": "string", "category": "Safety", "location": "City, State", "acceptRate": "XX%%", "reasoning": "string" }
              ]
            }
            """.formatted(transcriptText);
    }

    private List<CollegeSuggestion> getCollegeSuggestions(String transcriptText) throws Exception {
        String prompt = buildPrompt(transcriptText);

        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key="
                      + geminiApiKey;

        Map<String, Object> requestBody = Map.of(
            "contents", List.of(
                Map.of("parts", List.of(Map.of("text", prompt)))
            )
        );

        String rawResponse = restClient.post()
            .uri(url)
            .contentType(MediaType.APPLICATION_JSON)
            .body(requestBody)
            .retrieve()
            .body(String.class);

        JsonNode root = objectMapper.readTree(rawResponse);
        String generatedText = root
            .path("candidates").get(0)
            .path("content").path("parts").get(0)
            .path("text").asText();

        String cleanJson = generatedText.replaceAll("```json|```", "").trim();

        CollegeSuggestionResponse parsed = objectMapper.readValue(cleanJson, CollegeSuggestionResponse.class);
        return parsed.colleges();
    }

    public TranscriptJob getJob(String jobId) {
        return jobs.get(jobId);
    }
}
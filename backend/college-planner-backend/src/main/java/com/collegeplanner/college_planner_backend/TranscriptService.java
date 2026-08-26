package com.collegeplanner.college_planner_backend;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class TranscriptService {

    // In-memory for now - swap for a real DB table once this is proven out
    private final Map<String, TranscriptJob> jobs = new ConcurrentHashMap<>();
    private final UserProfileService userProfileService;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public TranscriptService(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    public String startProcessing(String userId, MultipartFile file) {
        System.out.println("startProcessing called on thread: " + Thread.currentThread().getName());

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
        // System.out.println("processAsync running on thread: " + Thread.currentThread().getName());

        job.setStatus("PROCESSING");
        try {
            // extract text from PDF (e.g. Apache PDFBox)
            String text = extractText(fileBytes);

            if (text == null || text.isBlank()) {
                job.setStatus("FAILED");
                job.setErrorMessage("Could not extract any text from this PDF. It may be a scanned image rather than text-based.");
                return;
            }

            job.setExtractedText(text);

            // TODO: call AI model to generate college suggestions
            // TODO: save results tied to job.getUserId()

            // Thread.sleep(3000); // placeholder for real processing time

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
            
            // The following two lines print the contents of the uploaded PDF
            // String text = stripper.getText(document);
            // System.out.println("=== EXTRACTED TEXT ===\n" + text);
            
            return stripper.getText(document);
        }
    }

    public TranscriptJob getJob(String jobId) {
        return jobs.get(jobId);
    }
}
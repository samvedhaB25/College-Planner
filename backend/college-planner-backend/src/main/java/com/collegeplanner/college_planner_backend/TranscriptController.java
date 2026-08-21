package com.collegeplanner.college_planner_backend;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/transcript")
public class TranscriptController {

    private final TranscriptService transcriptService;

    public TranscriptController(TranscriptService transcriptService) {
        this.transcriptService = transcriptService;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> uploadTranscript(
            @RequestParam("transcript") MultipartFile file,
            @AuthenticationPrincipal OAuth2User principal
    ) {
        if (principal == null) {
            return ResponseEntity.status(401).build();
        }
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("No file provided");
        }
        if (!"application/pdf".equals(file.getContentType())) {
            return ResponseEntity.badRequest().body("File must be a PDF");
        }

        String userId = principal.getAttribute("email");
        String jobId = transcriptService.startProcessing(userId, file);

        Map<String, String> response = new HashMap<>();
        response.put("jobId", jobId);
        response.put("status", "PENDING");
        return ResponseEntity.ok(response);
    }

    @GetMapping("/status/{jobId}")
    public ResponseEntity<?> getStatus(@PathVariable String jobId) {
        TranscriptJob job = transcriptService.getJob(jobId);
        if (job == null) {
            return ResponseEntity.notFound().build();
        }

        Map<String, Object> response = new HashMap<>();
        response.put("status", job.getStatus());
        if ("FAILED".equals(job.getStatus())) {
            response.put("error", job.getErrorMessage());
        }
        return ResponseEntity.ok(response);
    }
}
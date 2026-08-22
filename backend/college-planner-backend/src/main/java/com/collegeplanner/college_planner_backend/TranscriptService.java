package com.collegeplanner.college_planner_backend;

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
        System.out.println("processAsync running on thread: " + Thread.currentThread().getName());
        
        job.setStatus("PROCESSING");
        try {
            // TODO: extract text from PDF (e.g. Apache PDFBox)
            // TODO: call AI model to generate college suggestions
            // TODO: save results tied to job.getUserId()

            Thread.sleep(3000); // placeholder for real processing time

            job.setStatus("COMPLETE");
        } catch (Exception e) {
            job.setStatus("FAILED");
            job.setErrorMessage(e.getMessage());
        }
    }

    public TranscriptJob getJob(String jobId) {
        return jobs.get(jobId);
    }
}
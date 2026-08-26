package com.collegeplanner.college_planner_backend;

import java.util.*;

public class TranscriptJob {
    private String jobId;
    private String userId;
    private String status; // PENDING, PROCESSING, COMPLETE, FAILED
    private String errorMessage;
    private String extractedText;
    private List<CollegeSuggestion> collegeSuggestions;

    public TranscriptJob(String jobId, String userId) {
        this.jobId = jobId;
        this.userId = userId;
        this.status = "PENDING";
    }

    public String getJobId() { return jobId; }
    public String getUserId() { return userId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getErrorMessage() { return errorMessage; }
    public void setErrorMessage(String errorMessage) { this.errorMessage = errorMessage; }
    public String getExtractedText() { return extractedText; }
    public void setExtractedText(String extractedText) { this.extractedText = extractedText; }
    public List<CollegeSuggestion> getCollegeSuggestions() { return collegeSuggestions; }
    public void setCollegeSuggestions(List<CollegeSuggestion> collegeSuggestions) { this.collegeSuggestions = collegeSuggestions; }
}
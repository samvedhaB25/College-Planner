package com.collegeplanner.college_planner_backend;

public class TranscriptJob {
    private String jobId;
    private String userId;
    private String status; // PENDING, PROCESSING, COMPLETE, FAILED
    private String errorMessage;

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
}
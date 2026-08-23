package com.collegeplanner.college_planner_backend;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class UserProfileService {

    // In-memory for now, keyed by email - swap for a real DB table later
    private final Map<String, Boolean> onboardingStatus = new ConcurrentHashMap<>();

    public boolean hasCompletedOnboarding(String userId) {
        return onboardingStatus.getOrDefault(userId, false);
    }

    public void markOnboardingComplete(String userId) {
        onboardingStatus.put(userId, true);
    }
}
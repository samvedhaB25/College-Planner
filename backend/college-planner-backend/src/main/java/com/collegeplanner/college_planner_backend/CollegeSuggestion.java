package com.collegeplanner.college_planner_backend;

import java.util.List;

public record CollegeSuggestion(
    String name,
    String category,
    String location,
    String acceptRate,
    String reasoning
) {}
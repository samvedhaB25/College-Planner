package com.collegeplanner.college_planner_backend;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@AuthenticationPrincipal OAuth2User principal) {
        if (principal == null) {
            return ResponseEntity.status(401).build();
        }

        Map<String, Object> userInfo = new HashMap<>();
        // Cognito can expose the username under different claim names
        // depending on your user pool config — check which one applies
        // by hitting /api/user/me directly and inspecting the JSON.
        Object username = principal.getAttribute("username");
        if (username == null) {
            username = principal.getAttribute("cognito:username");
        }
        userInfo.put("username", username);
        userInfo.put("email", principal.getAttribute("email"));

        return ResponseEntity.ok(userInfo);
    }
}
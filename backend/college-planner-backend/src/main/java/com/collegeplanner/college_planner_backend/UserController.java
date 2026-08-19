package com.collegeplanner.college_planner_backend;

import org.springframework.beans.factory.annotation.Value;
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
    // "name" is typically the Google display name; "email" is always present
    Object displayName = principal.getAttribute("name");
    if (displayName == null) {
        displayName = principal.getAttribute("email");
    }
    userInfo.put("username", displayName);
    userInfo.put("email", principal.getAttribute("email"));

    return ResponseEntity.ok(userInfo);
}

    @Value("${spring.security.oauth2.client.registration.cognito.client-secret:NOT_SET}")
private String debugSecret;

@GetMapping("/api/debug/secret-check")
public String checkSecret() {
    if (debugSecret.equals("NOT_SET")) return "Property not resolved at all";
    return "Secret length: " + debugSecret.length() + ", starts with: " + debugSecret.substring(0, Math.min(4, debugSecret.length()));
}
}
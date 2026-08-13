package com.collegeplanner.college_planner_backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController 
public class HelloController { 
    @GetMapping("/hello") 
    public String hello() { 
        return "Hello from College Planner backend!"; 
    } 
}
package com.example.personal_portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestControlleree {
    @GetMapping("/")
    public String test() {
        return "test";
    }
}
package com.example.personal_portfolio; // 본인 패키지명으로 수정

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/api/test")
    public String hello() {
        return "스프링부트와 리액트 연동 성공!";
    }
}
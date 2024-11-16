package com.example.demo.dto;

import com.example.demo.models.User;

import lombok.Data;

@Data
public class LoginResponse {

    private boolean success;
    private String message;
    private User user;

    public LoginResponse(boolean success, String message, User user) {
        this.success = success;
        this.message = message;
        this.user = user;
    }


}

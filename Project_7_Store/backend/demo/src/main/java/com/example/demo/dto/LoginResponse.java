package com.example.demo.dto;

import com.example.demo.models.Korisnik;

import lombok.Data;

@Data
public class LoginResponse {

    public LoginResponse(boolean b, String string, Korisnik korisnik) {
        this.success = b;
        this.message = string;
        this.korisnik = korisnik;
    }
    private boolean success;
    private String message;
    private Korisnik korisnik;

}

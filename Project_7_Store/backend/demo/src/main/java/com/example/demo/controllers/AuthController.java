package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import com.example.demo.models.Korisnik;
import com.example.demo.services.KorisnikService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private KorisnikService korisnikService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request){
        Korisnik korisnik = korisnikService.getKorisnikByKorisnickoIme(request.getKor_ime());
        if(korisnik!=null &&
            korisnik.getLozinka().equals(request.getLozinka()) 
            && korisnik.getTip().equals(request.getTip()))
        {
            return new LoginResponse(true, "Uspesno logovanje", korisnik);
        }
        return new LoginResponse(false, "Nepostojeci korisnik", null);
    }

}

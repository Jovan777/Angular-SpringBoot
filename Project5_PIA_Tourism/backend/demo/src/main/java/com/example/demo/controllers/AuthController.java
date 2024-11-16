package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AgencijaLoginRequest;
import com.example.demo.dto.PutnikLoginRequest;
import com.example.demo.models.Agencija;
import com.example.demo.models.Putnik;
import com.example.demo.services.AgencijaService;
import com.example.demo.services.PutnikService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AgencijaService agencijaService;

    @Autowired
    private PutnikService putnikService;


    @PostMapping("/agencija/login")
    public Agencija agencyLogin(@RequestBody AgencijaLoginRequest request){
        return agencijaService.getAgencijaByKorisnickoImeAndLozinka(request.getKorisnickoIme(), request.getLozinka());
    }

    @PostMapping("/putnik/login")
    public Putnik putnikLogin(@RequestBody PutnikLoginRequest request){
        return putnikService.getPutnikByKorisnickoImeAndLozinka(request.getKorisnickoIme(), request.getLozinka());
        
    }





}

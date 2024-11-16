package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Narudzbina;
import com.example.demo.models.User;
import com.example.demo.services.NarudzbinaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/narudzbina")
public class NarudzbinaController {

    @Autowired
    private NarudzbinaService service;

    @PostMapping
    public Narudzbina kreirajNarudzbinu(@RequestBody Narudzbina narudzbina){
        narudzbina.setDatum(new java.sql.Date(new java.util.Date().getTime()));
        return service.kreirajNarudzbinu(narudzbina);
    }

    @GetMapping
    public List<Narudzbina> dohvatiSve(){
        return service.dohvatiSveNarudzbine();
    }

    @GetMapping("/kupac/{korisnickoIme}")
    public List<Narudzbina> narudzbineKorisnika(@PathVariable String korisnickoIme){
        return service.narudzbineKorisnika(korisnickoIme);
    }

    @GetMapping("/kupac/best")
    public User kupacSaNajviseNarudzbina(){
        return service.najviseNarudzbina();
    }

}

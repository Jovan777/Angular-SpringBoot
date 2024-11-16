package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Usluga;
import com.example.demo.services.UslugaService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/usluga")
public class UslugaController {

    @Autowired
    private UslugaService uslugaService;

    @GetMapping("/agencija/{korisnickoime}")
    public List<Usluga> getUslugaByAgencija(@PathVariable String korisnickoime) {
        return uslugaService.findByAgencija(korisnickoime);
    }
}
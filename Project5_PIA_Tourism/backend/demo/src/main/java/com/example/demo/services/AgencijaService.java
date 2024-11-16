package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Agencija;
import com.example.demo.repositories.AgencijaRepository;

@Service
public class AgencijaService {

    @Autowired
    private AgencijaRepository agencijaRepository;

    public Agencija getAgencijaByKorisnickoImeAndLozinka(String korisnickoIme, String lozinka){
        Agencija agencija = agencijaRepository.findByKorisnickoime(korisnickoIme);
        System.out.println("Dohvacena agencija : "+agencija);
        return agencija;
    }

    public Agencija getAgencijaByKorisnickoIme(String korisnickoIme){
        return agencijaRepository.findByKorisnickoime(korisnickoIme);
    }


    public Agencija getAgencijaByNaziv(String naziv){
        return agencijaRepository.findByNaziv(naziv);
    }



}

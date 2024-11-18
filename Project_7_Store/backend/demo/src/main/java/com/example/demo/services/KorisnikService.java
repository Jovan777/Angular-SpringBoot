package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Korisnik;
import com.example.demo.repositories.KorisnikRepo;

@Service
public class KorisnikService {

    @Autowired
    private KorisnikRepo korisnikRepo;
    
    public Korisnik getKorisnikByKorisnickoIme(String korisnickoIme){
        return korisnikRepo.findByKorisnickoIme(korisnickoIme);
    }


}

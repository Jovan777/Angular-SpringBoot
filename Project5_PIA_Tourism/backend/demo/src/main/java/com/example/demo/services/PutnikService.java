package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Putnik;
import com.example.demo.repositories.PutnikRepository;

@Service
public class PutnikService {


    @Autowired
    private PutnikRepository putnikRepository;


    public Putnik getPutnikByKorisnickoImeAndLozinka(String korisnickoIme, String lozinka) {
        System.out.println("Prijava putnika: korisnickoIme=" + korisnickoIme + ", lozinka=" + lozinka);
        Putnik putnik = putnikRepository.findByKorisnickoimeAndLozinka(korisnickoIme, lozinka);
        System.out.println("Rezultat: " + putnik);
        return putnik;
    }

    public Putnik getPutnikByKorisnickoIme(String korisnickoIme){
        return putnikRepository.findByKorisnickoime(korisnickoIme);
    }

    

}

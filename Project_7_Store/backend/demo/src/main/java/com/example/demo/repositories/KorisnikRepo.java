package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Korisnik;

public interface KorisnikRepo extends JpaRepository<Korisnik, String>{
    
    public Korisnik findByKorisnickoIme(String korisnickoIme);

}

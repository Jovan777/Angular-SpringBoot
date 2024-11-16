package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Agencija;

public interface AgencijaRepository extends JpaRepository<Agencija, String> {

    Agencija findByKorisnickoime(String korisnickoIme);

    Agencija findByNaziv(String naziv);

    Agencija findByKorisnickoimeAndLozinka(String korisnickoIme, String lozinka);




}

package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Narudzbina;

public interface NarudzbinaRepo extends JpaRepository<Narudzbina, Integer>{

    List<Narudzbina> findByKupac_KorisnickoIme(String korisnickoIme);

}

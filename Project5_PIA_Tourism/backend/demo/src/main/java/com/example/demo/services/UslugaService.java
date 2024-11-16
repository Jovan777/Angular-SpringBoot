package com.example.demo.services;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Agencija;
import com.example.demo.models.Usluga;
import com.example.demo.repositories.AgencijaRepository;
import com.example.demo.repositories.UslugaRepository;

@Service
public class UslugaService {

    @Autowired
    private UslugaRepository uslugaRepository;

    @Autowired
    private AgencijaRepository agencijaRepository;

    public List<Usluga> getAllUsluge() {
        return uslugaRepository.findAll();
    }

    public Usluga getUslugaById(int id) {
        return uslugaRepository.findById(id);
    }

    public List<Usluga> findByAgencija(String korisnickoime) {
        Agencija agencija = agencijaRepository.findByKorisnickoime(korisnickoime);

        if (agencija == null) {
            return Collections.emptyList();
        } else {
        }

        List<Usluga> usluge = uslugaRepository.findByAgencija(agencija);
        return usluge;
    }
}


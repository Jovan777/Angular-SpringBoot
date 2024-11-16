package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Narudzbina;
import com.example.demo.models.NarudzbinaSadrzi;
import com.example.demo.repositories.NarudzbinaRepo;
import com.example.demo.repositories.NarudzbinaSadrziRepo;

@Service
public class NarudzbinaSadrziService {

    @Autowired
    private NarudzbinaSadrziRepo narudzbinaSadrziRepo;

    @Autowired
    private NarudzbinaRepo narudzbinaRepo;

    public void sacuvajStavke(List<NarudzbinaSadrzi> stavke){
        narudzbinaSadrziRepo.saveAll(stavke);
    }

    public List<NarudzbinaSadrzi> dohvatiProizvodeIzNarudzbine(int id){
        Narudzbina narudzbina = narudzbinaRepo.findById(id).get();
        return narudzbinaSadrziRepo.findByNarudzbina(narudzbina);
    }

}

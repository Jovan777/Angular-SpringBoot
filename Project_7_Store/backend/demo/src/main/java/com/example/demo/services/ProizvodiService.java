package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Proizvod;
import com.example.demo.repositories.ProizvodiRepo;

@Service
public class ProizvodiService {

    @Autowired
    private ProizvodiRepo proizvodiRepo;

    public List<Proizvod> getAll(){
        return proizvodiRepo.findAll();
    }

    public Proizvod getProizvodById(int id){
        return proizvodiRepo.findById(id);
    }

    public void decreaseAmount(int id, int amount){
        Proizvod proizvod = proizvodiRepo.findById(id);
        proizvod.setKolicina(proizvod.getKolicina()- amount > 0 ? proizvod.getKolicina()- amount : 0);

        proizvodiRepo.save(proizvod);
    }

}

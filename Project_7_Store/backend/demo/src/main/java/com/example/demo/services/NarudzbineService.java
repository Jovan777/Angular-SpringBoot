package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Narudzbina;
import com.example.demo.models.Proizvod;
import com.example.demo.repositories.NarudzbineRepo;

@Service
public class NarudzbineService {

    @Autowired
    private NarudzbineRepo narudzbineRepo;

    @Autowired
    private ProizvodiService proizvodiService;

    public Narudzbina saveNarudzbina(Narudzbina narudzbina){
        return narudzbineRepo.save(narudzbina);
    }

    public List<Narudzbina> getNarudzbine(){
        return narudzbineRepo.findAll();
    }

    public boolean acceptOrder(int id){
        Narudzbina narudzbina = narudzbineRepo.findByIdN(id);
        if(narudzbina == null){
            return false;
        }
        Proizvod proizvod = proizvodiService.getProizvodById(narudzbina.getProizvod().getId());
        if(proizvod == null){
            return false;
        }
        proizvodiService.decreaseAmount(proizvod.getId(), narudzbina.getKolicina());
        narudzbineRepo.delete(narudzbina);
        return true;
    }
   

}

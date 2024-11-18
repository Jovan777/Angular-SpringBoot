package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.NarudzbinaRequest;
import com.example.demo.models.Korisnik;
import com.example.demo.models.Narudzbina;
import com.example.demo.models.Proizvod;
import com.example.demo.services.KorisnikService;
import com.example.demo.services.NarudzbineService;
import com.example.demo.services.ProizvodiService;

@RestController
@RequestMapping("/api/narudzbine")
@CrossOrigin("*")
public class NarudzbinaController {


    @Autowired
    private NarudzbineService narudzbinaService;

    @Autowired
    private KorisnikService korisnikService;

    @Autowired
    private ProizvodiService proizvodiService;

    @PostMapping("/add")
    public Narudzbina addNarudzbina(@RequestBody NarudzbinaRequest narudzbinaRequest){
        Korisnik korisnik = korisnikService.getKorisnikByKorisnickoIme(narudzbinaRequest.getKupac());
        Proizvod proizvod = proizvodiService.getProizvodById(narudzbinaRequest.getProizvod());
        
        if (korisnik==null || proizvod==null){
            return null;
        }
        else{
            Narudzbina narudzbina = new Narudzbina();
            narudzbina.setKupac(korisnik);
            narudzbina.setProizvod(proizvod);
            narudzbina.setKolicina(narudzbinaRequest.getKolicina());
            return narudzbinaService.saveNarudzbina(narudzbina);
        }
    }

    @GetMapping("")
    public List<Narudzbina> getNarudzbine(){
        return narudzbinaService.getNarudzbine();
    }

    @PostMapping("/accept/{id}")
    public boolean acceptOrder(@PathVariable int id){
        return narudzbinaService.acceptOrder(id);
    }
}

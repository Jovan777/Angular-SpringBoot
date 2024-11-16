package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Narudzbina;
import com.example.demo.models.User;
import com.example.demo.repositories.NarudzbinaRepo;
import com.example.demo.repositories.UserRepository;

@Service
public class NarudzbinaService {

    @Autowired
    private NarudzbinaRepo narudzbinaRepo;

    @Autowired
    private UserRepository userRepository;

    public Narudzbina kreirajNarudzbinu(Narudzbina narudzbina){
        String korisnickoIme = narudzbina.getKupac().getKorisnickoIme();
        User kupac = userRepository.findById(korisnickoIme)
                .orElseThrow(() -> new RuntimeException("Kupac sa korisničkim imenom '" + korisnickoIme + "' ne postoji."));
        narudzbina.setKupac(kupac);

        return narudzbinaRepo.save(narudzbina);
    }

    public List<Narudzbina> dohvatiSveNarudzbine(){
        return narudzbinaRepo.findAll();
    }

    public List<Narudzbina> narudzbineKorisnika(String korisnickoIme){
        return narudzbinaRepo.findByKupac_KorisnickoIme(korisnickoIme);
    }

    public User najviseNarudzbina(){
        List<User> korisnici = userRepository.findAll();
        int temp = 0;
        int max = 0;
        User najviseNarucivao = null;
        for(User korisnik : korisnici){
            temp = narudzbinaRepo.findByKupac_KorisnickoIme(korisnik.getKorisnickoIme()).size();
            if(temp > max){
                max = temp;
                najviseNarucivao = korisnik;
            }
        }
        return najviseNarucivao;
    }

}

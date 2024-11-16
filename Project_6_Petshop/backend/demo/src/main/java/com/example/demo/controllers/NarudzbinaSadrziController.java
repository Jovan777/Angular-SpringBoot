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
import com.example.demo.models.Narudzbina;
import com.example.demo.models.NarudzbinaSadrzi;
import com.example.demo.models.NarudzbinaSadrziKey;
import com.example.demo.models.Proizvod;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import com.example.demo.services.NarudzbinaSadrziService;
import com.example.demo.services.NarudzbinaService;
import com.example.demo.services.ProizvodiService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/narudzbine")
public class NarudzbinaSadrziController {


    @Autowired
    private NarudzbinaService narudzbinaService;

    @Autowired
    private NarudzbinaSadrziService narudzbinaSadrziService;

    @Autowired
    private ProizvodiService proizvodService;

     @Autowired
    private UserRepository userRepository; 

    @GetMapping("/{id}")
    public List<NarudzbinaSadrzi> proizvodiIzNarudzbine(@PathVariable int id){
        return narudzbinaSadrziService.dohvatiProizvodeIzNarudzbine(id);
    }



    @PostMapping
    public String kreirajNarudzbinu(@RequestBody NarudzbinaRequest narudzbinaRequest){
        Narudzbina narudzbina = new Narudzbina();
        System.out.println("Korisnicko ime kupca : "+narudzbinaRequest.getKupac());

        User kupac = userRepository.findByKorisnickoIme(narudzbinaRequest.getKupac());


        narudzbina.setKupac(kupac);
        narudzbina.setDatum(new java.sql.Date(new java.util.Date().getTime()));
        narudzbinaService.kreirajNarudzbinu(narudzbina);

        List<NarudzbinaSadrzi> stavke = narudzbinaRequest.getProizvodi().stream().map(
            proizvodDTO->{
                Proizvod proizvod = proizvodService.findByNaziv(proizvodDTO.getNaziv());
                NarudzbinaSadrzi stavka = new NarudzbinaSadrzi();
                NarudzbinaSadrziKey key = new NarudzbinaSadrziKey();
                key.setNarudzbinaId(narudzbina.getId());
                key.setProizvodNaziv(proizvodDTO.getNaziv());
                stavka.setId(key);
                stavka.setNarudzbina(narudzbina);
                stavka.setKolicina(proizvodDTO.getKolicina());
                stavka.setProizvod(proizvod);
            return stavka;
            }
        ).toList();

        narudzbinaSadrziService.sacuvajStavke(stavke);
        return "Narudzbina uspesno kreirana";
    }

    


}

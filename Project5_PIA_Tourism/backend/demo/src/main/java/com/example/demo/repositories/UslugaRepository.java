package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Agencija;
import com.example.demo.models.Usluga;

public interface UslugaRepository extends JpaRepository<Usluga, Integer> {

    Usluga findById(int id);

    List<Usluga> findByAgencija(Agencija agencija);

    List<Usluga> findByLokacijaOd(String lokacija);

    List<Usluga> findByLokacijaDo(String lokacija);

    List<Usluga> findByTip(String tip);
}



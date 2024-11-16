package com.example.demo.repositories;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Proizvod;

public interface ProizvodiRepo extends JpaRepository<Proizvod, String>{

    Proizvod findByNaziv(String naziv);
    

}

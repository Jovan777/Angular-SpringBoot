package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Narudzbina;

public interface NarudzbineRepo extends JpaRepository<Narudzbina, Integer>{
    public Narudzbina findByIdN(int id);

}

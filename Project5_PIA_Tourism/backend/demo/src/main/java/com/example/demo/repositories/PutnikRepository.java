package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Putnik;

public interface PutnikRepository extends JpaRepository<Putnik, String>{
    
    Putnik findByKorisnickoimeAndLozinka(String korisnickoime, String lozinka);
    Putnik findByKorisnickoime(String korisnickoime);

    Putnik findByImejl(String imejl);

    Putnik findByLokacijatrenutna(String lokacija_trenutna);


}

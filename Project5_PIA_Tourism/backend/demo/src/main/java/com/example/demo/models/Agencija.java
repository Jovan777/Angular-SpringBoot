package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name ="agencija")
public class Agencija {
    

    @Id
    @Column(name = "korisnickoime")
    private String korisnickoime;

    private String lozinka;
    private String naziv;

    private int PIB;
    

}

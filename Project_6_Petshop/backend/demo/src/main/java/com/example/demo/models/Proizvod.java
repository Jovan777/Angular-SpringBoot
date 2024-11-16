package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "proizvodi")
public class Proizvod {

    @Id
    @Column(name = "naziv" ,nullable = false)
    private String naziv;

    @Column(name = "opis")
    private String opis;

    @Column(name = "cena")
    private double cena;

    @Column(name = "promocija")
    private boolean promocija;


}

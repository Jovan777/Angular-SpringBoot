package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "putnik")
public class Putnik {

    @Id
    @Column(name = "korisnickoime")
    private String korisnickoime;

    @Column(name = "lozinka")
    private String lozinka;

    @Column(name = "ime_prezime")
    private String ime_prezime;

    @Column(name = "imejl")
    private String imejl;

    @Column(name = "lokacija_trenutna")
    private String lokacijatrenutna;

    @Column(name = "novac")
    private Double novac;

}

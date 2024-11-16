package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "usluga")
public class Usluga {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "idAgencije", referencedColumnName = "korisnickoime")
    private Agencija agencija;

    @Column(name = "lokacija_od")
    private String lokacijaOd;

    @Column(name = "lokacija_do")
    private String lokacijaDo;

    @Column(name = "tip")
    private String tip;

    @Column(name = "period")
    private String period;

    @Column(name = "cena")
    private double cena;

    @Column(name = "broj_mesta")
    private int brojMesta;
}

package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "narudzbine")
public class Narudzbina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idN")
    private int idN;

    @ManyToOne
    @JoinColumn(name = "kupac", referencedColumnName = "kor_ime")
    private Korisnik kupac;


    @OneToOne
    @JoinColumn(name = "proizvod", referencedColumnName = "idP")
    private Proizvod proizvod;

    @Column(name = "kolicina")
    private int kolicina;
    

}

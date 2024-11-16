package com.example.demo.models;


import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "korisnici")
public class User {

    @Id
    @Column(name = "kor_ime")
    private String korisnickoIme;

    @Column(name = "ime")
    private String ime;

    @Column(name = "prezime")
    private String prezime;

    @Column(name = "mejl")
    private String mejl;

    @Column(name = "lozinka")
    private String lozinka;

    @Column(name = "datum_rodjenja")
    private Date datumRodjenja;

    @Column(name = "tip")
    private String tip;

}

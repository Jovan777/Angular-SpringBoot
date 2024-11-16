package com.example.demo.models;


import java.sql.Date;

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
@Table(name = "narudzbine")
public class Narudzbina {

    @Id
    @Column(name = "idN")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "kupac", referencedColumnName = "kor_ime", nullable = false)
    private User kupac;
    

    @Column(name = "datum")
    private Date datum;

}

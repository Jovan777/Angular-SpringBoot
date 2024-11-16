package com.example.demo.models;

import java.io.Serializable;

import jakarta.persistence.Column;

public class NarudzbinaSadrziKey implements Serializable {

    @Column(name = "narudzbina")
    private int narudzbinaId;

    @Column(name = "proizvod")
    private String proizvodNaziv;

    public int getNarudzbinaId() {
        return narudzbinaId;
    }

    public void setNarudzbinaId(int narudzbinaId) {
        this.narudzbinaId = narudzbinaId;
    }

    public String getProizvodNaziv() {
        return proizvodNaziv;
    }

    public void setProizvodNaziv(String proizvodNaziv) {
        this.proizvodNaziv = proizvodNaziv;
    }


    
    
}

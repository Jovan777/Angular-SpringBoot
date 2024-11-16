package com.example.demo.dto;

import java.util.List;


public class NarudzbinaRequest {

    private String kupac;
    private List<ProizvodRequest> proizvodi;
  
    public List<ProizvodRequest> getProizvodi() {
        return proizvodi;
    }
    public void setProizvodi(List<ProizvodRequest> proizvodi) {
        this.proizvodi = proizvodi;
    }
    public String getKupac() {
        return kupac;
    }
    public void setKupac(String kupac) {
        this.kupac = kupac;
    }

    

}

package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "narudzbinasadrzi")
public class NarudzbinaSadrzi {

    @EmbeddedId
    private NarudzbinaSadrziKey id;

    @ManyToOne
    @MapsId("narudzbinaId")
    @JoinColumn(name = "narudzbina", referencedColumnName = "idN")
    private Narudzbina narudzbina;

    @ManyToOne
    @MapsId("proizvodNaziv")
    @JoinColumn(name = "proizvod", referencedColumnName = "naziv")
    private Proizvod proizvod;

    @Column(name = "kolicina")
    private int kolicina;
    

}

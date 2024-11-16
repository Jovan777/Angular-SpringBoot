import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NarudzbinaService } from '../../services/narudzbina.service';

@Component({
  selector: 'app-prodavac',
  standalone: true,
  imports: [],
  templateUrl: './prodavac.component.html',
  styleUrl: './prodavac.component.css'
})
export class ProdavacComponent {

  constructor(private http: HttpClient, private router: Router,
    private narudzbinaService : NarudzbinaService
  ) { 
    
  }

  korisnik : any
  narudzbine : any[] = []
  naruceniProizvodi : any[] = []
  najbolji_kupac : any;

  ngOnInit(){

    this.narudzbinaService.bestBuyer().subscribe((res)=>{
      this.najbolji_kupac = res
    })

    var data_korisnik = JSON.parse(localStorage.getItem('User') || '')
    this.korisnik = data_korisnik
    this.narudzbinaService.getAll().subscribe((res)=>{
      this.narudzbine = res
      console.log("Dohvacene narudzbine: ", this.narudzbine);
      for(let narudzbina of this.narudzbine){
        this.narudzbinaService.dohvatiProizvodiIzNarudzbine(narudzbina.id).subscribe((res)=>{
          this.naruceniProizvodi[narudzbina.id] = res
        })
      }
    })
    console.log("Naruceni proizvodi: ", this.naruceniProizvodi);
  }


}

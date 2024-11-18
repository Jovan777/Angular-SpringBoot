import { Component } from '@angular/core';
import { NarudzbinaService } from '../../services/narudzbina.service';
import { Router } from '@angular/router';
import { ProizvodiService } from '../../services/proizvodi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prodavac',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './prodavac.component.html',
  styleUrl: './prodavac.component.css'
})
export class ProdavacComponent {


  narudzbine : any;
  korisnik : any;
  proizvodi : any;
  pretraga : string = ''
  prikazaniProizvodi : any[] = [];

  constructor(private router : Router, 
    private narudzbinaService : NarudzbinaService,
     private proizvodiService : ProizvodiService
  ){

  }

  ngOnInit(){
    this.narudzbinaService.dohvatiNarudzbine().subscribe((data : any)=>{
      
      this.narudzbine = data;
      console.log("Narudzbine: ", this.narudzbine);
      
    })
    this.proizvodiService.dohvatiSveProizvode().subscribe((data : any)=>{
      this.proizvodi = data;
      this.prikazaniProizvodi = [...this.proizvodi]
      console.log("Proizvodi : " + this.proizvodi);

    })
    if(localStorage.getItem('Korisnik')){
      this.korisnik = localStorage.getItem('Korisnik');
      this.korisnik = JSON.parse(this.korisnik);
    }
    console.log("Narudzbine: ", this.narudzbine);

  }

  filtriraj(){
    if(this.pretraga.trim()===''){
      this.prikazaniProizvodi = [...this.proizvodi];
    }
    else{
      this.prikazaniProizvodi = this.proizvodi.filter((proizvod : any)=>{
        return proizvod.naziv.toLowerCase().includes(this.pretraga.toLowerCase());
      })
    }
  }

  prihvatiNarudzbinu(id : number){
    this.narudzbinaService.prihvatiNarudzbinu(id).subscribe((data : any)=>{
      console.log("Narudzbina prihvacena: ", data);
      window.location.reload();
    })
  }


  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }



}

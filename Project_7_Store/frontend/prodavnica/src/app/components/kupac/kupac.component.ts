import { Component } from '@angular/core';
import { ProizvodiService } from '../../services/proizvodi.service';
import { FormsModule } from '@angular/forms';
import { NarudzbinaService } from '../../services/narudzbina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kupac',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kupac.component.html',
  styleUrl: './kupac.component.css'
})
export class KupacComponent {


  proizvodi : any;
  korisnik : any;
  odabraniProizvod : any;


  constructor(private proizvodiService : ProizvodiService, 
    private narudzbinaService : NarudzbinaService, 
    private router : Router
  ){
    
  }

  odaberiProizvod(proizvod : any){
    this.odabraniProizvod = proizvod; 
  }

  naruci(){
    console.log("ID: "+this.odabraniProizvod.id);
    console.log("Kolicina: "+this.odabraniProizvod.kolicina);
    console.log("Korisnik: "+this.korisnik.korisnickoIme);
    let narudzbina = {
      kupac : this.korisnik.korisnickoIme,
      proizvod : this.odabraniProizvod.id,
      kolicina : this.odabraniProizvod.kolicina
    }
    this.narudzbinaService.dodajNarudzbinu(narudzbina).subscribe((data : any)=>{
      if(data!=null){
        alert("Uspesno ste narucili proizvod");
      }
    })

    
  }

  ngOnInit(){
    this.proizvodiService.dohvatiSveProizvode().subscribe((data : any)=>{
      this.proizvodi = data.map((proizvod: any)=>
      ({
        ...proizvod,
        kolicina : 1
      }) 
      )
    console.log(this.proizvodi);

    })
    if(localStorage.getItem('Korisnik')){
        this.korisnik = localStorage.getItem('Korisnik')
        this.korisnik = JSON.parse(this.korisnik)
    }
    
  }

  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }


}



import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NarudzbinaService } from '../../services/narudzbina.service';

@Component({
  selector: 'app-narudzbina',
  standalone: true,
  imports: [],
  templateUrl: './narudzbina.component.html',
  styleUrl: './narudzbina.component.css'
})
export class NarudzbinaComponent {

  narudzbinaProizvodi : any[] = [];
  kupac : any
  proizvodi: any [] = []

  constructor(private route: ActivatedRoute, private router : Router, 
    private http: HttpClient, private narudzbinaService : NarudzbinaService
  ){  }

  ngOnInit(){
    this.kupac = JSON.parse(localStorage.getItem('User') || '')
    this.kupac = this.kupac.korisnickoIme
    var p_data = JSON.parse(localStorage.getItem('proizvodi') || '')
    this.proizvodi = p_data
  }

  ukloniProizvod(proizvod: any){
    this.proizvodi = this.proizvodi.filter(p=>p.id!=proizvod.id)
  }

  potvrdiNarudzbinu() {
    const data = {
      kupac : this.kupac,
      proizvodi : this.proizvodi
    }
    console.log("Data: ", data);
    this.narudzbinaService.postNarudzbina(data).subscribe((res)=>{
      //console.log("Response : ", res);
      this.router.navigate(['/kupac'])
      
    })
    
  }



}

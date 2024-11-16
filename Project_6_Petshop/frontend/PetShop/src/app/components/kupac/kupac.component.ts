import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProizvodiService } from '../../services/proizvodi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kupac',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kupac.component.html',
  styleUrl: './kupac.component.css'
})
export class KupacComponent {

  proizvodi: any[]=[];
  user : any;

  constructor( private proizvodiService : ProizvodiService, private router: Router){
    
  }

  ngOnInit(){
    this.proizvodiService.getAll().subscribe((res : any[])=>{
      this.proizvodi = res.map(proizvod=>({
        ...proizvod,
        selektovan : false,
        kolicina: 1
      }))
      console.log("Proizvodi: ", this.proizvodi);
      
    })
    if(localStorage.getItem('User')!=null){
      console.log(JSON.parse(localStorage.getItem('User') || '{}'));
      
      this.user = JSON.parse(localStorage.getItem('User') || '{}')
    }

  }

  naruci(){
    localStorage.removeItem('proizvodi');
    const selektovaniProizvodi = this.proizvodi.filter(proizvod=>proizvod.selektovan 
    && proizvod.kolicina>0)

    localStorage.setItem('proizvodi', JSON.stringify(selektovaniProizvodi));

    this.router.navigate(['/narudzbina'], { state: { kupac:this.user.korisnickoIme, 
      proizvodi: selektovaniProizvodi } });
    
    

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }


}

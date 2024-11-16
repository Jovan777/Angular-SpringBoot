import { Component } from '@angular/core';
import { UslugaService } from '../../services/services/usluga.service';
import { Router } from '@angular/router';
import { Usluga } from '../../models/Usluga';

@Component({
  selector: 'app-agencija',
  standalone: true,
  imports: [],
  templateUrl: './agencija.component.html',
  styleUrl: './agencija.component.css'
})
export class AgencijaComponent {


  agencijaData : any;

  usluge : Usluga[] = [];

  constructor(private uslugaService : UslugaService, private router : Router) { }

  ngOnInit(): void {
    const userData = localStorage.getItem('User');
    this.agencijaData = userData ? JSON.parse(userData) : null;
    if (this.agencijaData && this.agencijaData.korisnickoime) {
      this.uslugaService.dohvatiUslugeOdAgencije(this.agencijaData.korisnickoime).subscribe(
        (res) => {
          this.usluge = res;
          console.log('Dohvaćene usluge:', this.usluge);
        },
        (error) => {
          console.error('Greška prilikom dohvatanja usluga:', error);
        }
      );
    } else {
      console.error('Nedostaju podaci o agenciji.');
    }
  }

}

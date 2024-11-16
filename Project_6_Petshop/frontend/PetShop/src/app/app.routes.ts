import { Routes } from '@angular/router';
import { ProdavacComponent } from './components/prodavac/prodavac.component';
import { KupacComponent } from './components/kupac/kupac.component';
import { LoginComponent } from './components/login/login.component';
import { NarudzbinaComponent } from './components/narudzbina/narudzbina.component';

export const routes: Routes = [
    {path : '', component : LoginComponent},
    {path : 'kupac', component : KupacComponent},
    {path : 'prodavac', component : ProdavacComponent},
    {path : 'narudzbina' , component : NarudzbinaComponent}

];

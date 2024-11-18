import { Routes } from '@angular/router';
import { KupacComponent } from './components/kupac/kupac.component';
import { LoginComponent } from './components/login/login.component';
import { ProdavacComponent } from './components/prodavac/prodavac.component';

export const routes: Routes = [
    {path : '', component : LoginComponent},
    {path : 'kupac' , component :KupacComponent},
    {path : 'prodavac', component : ProdavacComponent},
];

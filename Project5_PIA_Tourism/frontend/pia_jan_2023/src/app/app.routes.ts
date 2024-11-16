import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AgencijaComponent } from './components/agencija/agencija.component';
import { PutnikComponent } from './components/putnik/putnik.component';

export const routes: Routes = [
    {path : '', component : LoginComponent},
    {path : "putnik" , component : PutnikComponent},
    {path : "agencija" , component : AgencijaComponent}
];

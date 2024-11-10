// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ClientComponent } from './client/client.component';
import { CompanyComponent } from './company/company.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { RouterModule } from '@angular/router';
import { SignupCompanyComponent } from './components/signup-company/signup-company.component';

export const routes: Routes = [
    {path: 'client', component: ClientComponent},
    {path: 'company', component: CompanyComponent},
    {path: 'register-client', component: SignupClientComponent},
    {path: 'register-company', component: SignupCompanyComponent},
    {path: 'login', component: LoginComponent},

];

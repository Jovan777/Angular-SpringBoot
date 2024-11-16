import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string ='';


  constructor(private authService : AuthService, private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.loginForm = this.formBuilder.group({
      korisnickoIme : ['' , Validators.required],
      lozinka : ['', Validators.required],
      tip : ['', Validators.required]
    })
    
  }


  onSubmit(){
    const data = {
      korisnickoIme : this.loginForm.value.korisnickoIme,
      lozinka : this.loginForm.value.lozinka
    }

    if(this.loginForm.value.tip == 'Agencija'){
      this.authService.loginAgency(data).subscribe((res : any)=>{
        console.log(res);

        if(res.korisnickoime==data.korisnickoIme || res.lozinka==data.lozinka || res==null){
          localStorage.removeItem('User');
          
          localStorage.setItem('User', JSON.stringify(res));
          this.router.navigate(['/agencija'])
        }
        else{
          this.errorMessage = 'Korisnicko ime ili lozinka nisu ispravni';
        }
      }, error =>{
        this.errorMessage = error.error.message;
      })
    }
    else if(this.loginForm.value.tip == 'Putnik'){
      this.authService.loginPutnik(data).subscribe((res : any)=>{
        
        if(res.korisnickoime==data.korisnickoIme || res.lozinka==data.lozinka || res==null){
          localStorage.removeItem('User');
          localStorage.setItem('User', JSON.stringify(res));
          this.router.navigate(['/putnik'])
        }
        else{
          this.errorMessage = 'Korisnicko ime ili lozinka nisu ispravni';
        }
      }, error =>{
        this.errorMessage = error.error.message;
      })
    }
  }



}

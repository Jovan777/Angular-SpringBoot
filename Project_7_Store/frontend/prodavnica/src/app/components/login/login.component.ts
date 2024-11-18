import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage : string = '';


  constructor(private router : Router, private authService : AuthService, 
    private fb : FormBuilder
  ){
    this.loginForm = this.fb.group({
      kor_ime : ['', Validators.required],
      lozinka : ['', Validators.required],
      tip : ['', Validators.required]
    })
    
  }


  onSubmit(){
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe((res)=>{
        if(res.success){
          localStorage.clear()
          localStorage.setItem('Korisnik', JSON.stringify(res.korisnik))
          if(res.korisnik.tip == 'kupac'){
            this.router.navigate(['kupac'])
          }
          else if(res.korisnik.tip == 'prodavac'){
            this.router.navigate(['prodavac'])
          }
        }
        else{
          this.errorMessage = res.message;
        }
      })
    }
  }

  

}

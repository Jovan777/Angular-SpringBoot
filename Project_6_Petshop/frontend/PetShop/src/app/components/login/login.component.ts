import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm : FormGroup;
  errorMessage : string ='';


  constructor(private fb : FormBuilder, private authService : AuthServiceService, 
    private router: Router){
      this.loginForm = this.fb.group({
        korisnickoIme : ['', Validators.required],
        lozinka : ['', Validators.required],
        tip : ['', Validators.required]
      })
  }



  onSubmit(){
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      this.errorMessage = '';
      console.log(res);
      if(res.success){
        localStorage.clear();
        localStorage.setItem('User', JSON.stringify(res.user))
        if(res.user.tip == 'kupac'){
          this.router.navigate(['kupac'])
        }
        else if(res.user.tip == 'prodavac'){
          this.router.navigate(['prodavac'])
        }
      }
      else{
        this.errorMessage = res.message

      }
      
    })

  }




}

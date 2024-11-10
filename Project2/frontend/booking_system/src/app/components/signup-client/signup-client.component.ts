import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutComponent } from 'ng-zorro-antd/layout';


@Component({
  selector: 'app-signup-client',
  standalone: true,
  imports: [NzNotificationModule
    , NzFormModule, NzGridModule,
    ReactiveFormsModule, NzLayoutComponent, RouterModule
   ],
  templateUrl: './signup-client.component.html',
  styleUrl: './signup-client.component.css'
})
export class SignupClientComponent {

  validateForm!: FormGroup;

  constructor(private fb : FormBuilder, 
    private authService : AuthService, private router :Router,
    private notification : NzNotificationService)
  {}
  
  ngOnInit(){
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      checkPassword: [null, [Validators.required]]  
    })

  }


  submitForm(){
    if(this.validateForm.valid){
      if(this.validateForm.value.password == this.validateForm.value.checkPassword){
        this.authService.registerClient(this.validateForm.value).subscribe(
          (data)=>{
            this.notification.create('success', 'Success', 
              'Clientr registered successfully', {nzDuration: 3000});
            this.router.navigateByUrl('/login')
          },
          (error)=>{
            this.notification.create('error', 'Error', 'An error occurred', {nzDuration: 3000});

          }

        )
      }
    }
  }

  


}

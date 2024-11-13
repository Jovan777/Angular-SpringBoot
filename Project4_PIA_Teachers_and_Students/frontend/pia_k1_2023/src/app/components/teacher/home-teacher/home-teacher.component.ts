import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-teacher',
  standalone: true,
  imports: [],
  templateUrl: './home-teacher.component.html',
  styleUrl: './home-teacher.component.css'
})
export class HomeTeacherComponent {


  userData: any;

  constructor(private router: Router){}

  ngOnInit(){
    const storedData = localStorage.getItem('userData');
    if(storedData){
      this.userData = JSON.parse(storedData)
    }
  }

  logout(){
    AuthService.logout();
    this.router.navigate(['/login'])

  }

}

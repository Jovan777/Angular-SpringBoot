import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HttpClientModule } from '@angular/common/http';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, 
    ReactiveFormsModule, NzInputModule, NzLayoutModule,
     NzFormModule, NzGridModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Ispravljeno sa styleUrl na styleUrls
})

export class AppComponent {
  title = 'booking_system';
}

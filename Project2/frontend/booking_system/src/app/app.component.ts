import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ReactiveFormsModule, NzLayoutModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Ispravljeno sa styleUrl na styleUrls
})

export class AppComponent {
  title = 'booking_system';
}

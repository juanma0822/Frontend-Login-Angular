import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

//ANIMACIONES TOAST
import { CommonModule } from '@angular/common';


//HTTP
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Juanmasoft';
}

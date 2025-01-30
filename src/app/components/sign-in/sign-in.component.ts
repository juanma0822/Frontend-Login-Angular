import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  name: string = '';
  lastname: string = '';
  credential: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private toast: ToastrService) { }
  ngOnInit(): void {
  }

  addUser(){
    if (this.name == '' || this.email == '' || this.password == '' || this.repeatPassword == '' || this.credential == '') {
      this.toast.error('Todos los campos son obligatorios', 'Error');
      return
    }

    if(this.password != this.repeatPassword){
      this.toast.warning('Las claves son distintas', 'Verificar contraseña');
      return
    }
  }

}

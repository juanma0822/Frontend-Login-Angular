import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule, FormsModule, SpinnerComponent, CommonModule],
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

  loading: boolean = false;

  constructor(
    private toast: ToastrService,
    private _userService: UserService,
    private router: Router
  ) { }
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

    //CREAR EL OBJETO
    const user: User = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      credential: this.credential
    }

    this.loading = true;

    this._userService.signIn(user).subscribe(data => {
      this.toast.success(`La cuenta de ${this.name} ${this.lastname} ha sido creado exitosamente`)

      this.loading = false;
      this.router.navigate(['/logIn']);
    }, (event: HttpErrorResponse) => {
      this.loading = false;
      if(event.error.msg){
        this.toast.error(event.error.msg, 'Error');
        console.log(event.error.msg);
      }else{
        this.toast.error('Error en el servidor', 'Error');
      }
    })
  }

}

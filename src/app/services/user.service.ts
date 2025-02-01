import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AppUrl: string;
  private APIUrl: string;

  constructor(private Http: HttpClient) {
    this.AppUrl = environment.apiUrl;
    this.APIUrl = 'api/user/register/';
   }

   // signIn
   signIn(user: User): Observable<any>{
    return this.Http.post(`${this.AppUrl}${this.APIUrl}`,user)
   }
}

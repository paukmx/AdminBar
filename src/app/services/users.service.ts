import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './Global.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url: string;

  constructor( private http: HttpClient) {
    this.url = Global.url;
   }

  getUsers(){
    return this.http.get(this.url + 'usuario');
  }

  createUsers(user: User): Observable<any>{
    return this.http.post(this.url + 'crear-usuario', JSON.stringify(user));
  }

}

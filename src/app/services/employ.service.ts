import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './Global.service';
import { Employ } from '../models/employ.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployService {

  public url: string;

  constructor( private http: HttpClient ) {
    this.url = Global.url;
   }

   getEmploys(): Observable<any>{
     return this.http.get(this.url + 'empleado');
   }

   getEmploy(id) :Observable<any> {
     return this.http.get(this.url + 'empleado/' + id );
   }

   addEmploy(employ): Observable<any> {
    const params = JSON.stringify(employ);
    return this.http.post(this.url + 'crear-empleado', params);
   }

   deleteEmploy(id): Observable<any>{
     return this.http.delete(this.url + 'eliminar/' + id);
   }

   search(searchString): Observable<any>{
    return this.http.get(this.url + 'search/' + searchString);
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from './Global.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public url: string;

  constructor( private http: HttpClient ) {
    this.url = Global.url;
   }

   getProductos(): Observable<any>{
     return this.http.get(this.url + 'producto');
   }
}

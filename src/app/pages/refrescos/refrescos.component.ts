import { Component, OnInit } from '@angular/core';
import { BebidasService } from '../../services/bebidas.service';
import { Global } from 'src/app/services/Global.service';
import { Router } from '@angular/router';
import { Refresco } from '../../models/refresco.model';

declare function init_plugins();

@Component({
  selector: 'app-refrescos',
  templateUrl: './refrescos.component.html',
  styles: [
  ]
})
export class RefrescosComponent implements OnInit {

  public refrescos: Array<Refresco>;
  public url: string;

  constructor( private bebidasService: BebidasService, private router: Router) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    init_plugins();
    this.obtenerRefrescos();
  }

  obtenerRefrescos(){
    this.bebidasService.getRefrescos().subscribe(
      resp => {
        this.refrescos = resp.productos;
      }
    );
  }

}

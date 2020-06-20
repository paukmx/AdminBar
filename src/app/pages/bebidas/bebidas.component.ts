import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Global } from 'src/app/services/Global.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Bebida } from '../../models/bebida.model';

declare function init_plugins();

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styles: [
  ]
})
export class BebidasComponent implements OnInit {

  public Bebidas: Array<Bebida>;
  public url: string;
  result: any; // Resultado del filto
  subCat: any; // Subcategoria de la url

  constructor( private productosService: ProductosService, private router: Router, private rutaActiva: ActivatedRoute) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    init_plugins();
    // Obtenemos la subCategoria de la ruta activa
    this.subCat = this.rutaActiva.snapshot.params.subCategoria;
    // Obtenemos las bebidas filtradas
    this.obtenerBebidas();
  }

  obtenerBebidas(){
    this.productosService.getProductos().subscribe(
      resp => {
        // Obtenemos toda la lista de bebidas
        this.Bebidas = resp.productos;
        // Filtramos la lista por la subcategoria
        this.result = this.Bebidas.filter((x) => x.subCategoria === this.subCat);
      }
    );
  }

}

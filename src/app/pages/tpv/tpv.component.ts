import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Bebida } from 'src/app/models/bebida.model';
import swal from 'sweetalert';

declare function init_plugins();

@Component({
  selector: 'app-tpv',
  templateUrl: './tpv.component.html',
  styles: [
  ]
})
export class TpvComponent implements OnInit {

  public Bebidas: Array<Bebida>;
  result: any; // Resultado del filto
  bebidaNombre: any;

  buttonsTpv: any = [
    {id: 1, producto: 'Agua'},
    {id: 2, producto: 'coca-cola'},
    {id: 3, producto: 'Te rojo'},
    {id: 4, producto: 'Bordon'},
    {id: 5, producto: 'Fanta limon'},
    {id: 6, producto: 'Fanta naranja'},
    {id: 7, producto: 'Te verde'},
  ];

  constructor( private productosService: ProductosService ) { }

  ngOnInit(): void {
    init_plugins();
    this.obtenerBebidas();
  }

  obtenerBebidas(){
    this.productosService.getProductos().subscribe(
      resp => {
        // Obtenemos toda la lista de bebidas
        this.Bebidas = resp.productos;
        // Filtramos la lista por la subcategoria de bebidas
        this.result = this.Bebidas.filter((x) => x.categoria === 'Bebidas');
      }
    );
  }

  clickProduct(btn){
    console.log(btn.target.value);
  }

}

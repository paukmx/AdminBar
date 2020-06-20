import { Component, OnInit } from '@angular/core';
import { EmployService } from 'src/app/services/employ.service';
import { Global } from 'src/app/services/Global.service';
import { ProductosService } from 'src/app/services/productos.service';
import { Bebida } from 'src/app/models/bebida.model';

declare function init_plugins();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  public empleados: any;
  public Bebidas: Array<Bebida>;
  public url: string;
  totalStock: any;

  constructor(private employService: EmployService, private productosService: ProductosService) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    init_plugins();
    this.obtenerEmpleados();
    this.obtenerBebidasStock();
  }

  obtenerEmpleados(){
    this.employService.getEmploys().subscribe(
      resp => {
        this.empleados = resp.total;
      }
    );
  }

  obtenerBebidasStock(){
    this.productosService.getProductos().subscribe(
      resp => {
        // Obtenemos toda la lista de bebidas
        this.Bebidas = resp.productos;

        this.totalStock = this.Bebidas.reduce((sum, value) => (typeof value.stock === 'number' ? sum + value.stock : sum), 0);
      }
    );
  }

}

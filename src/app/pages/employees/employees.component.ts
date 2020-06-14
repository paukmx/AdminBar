import { Component, OnInit } from '@angular/core';
import { EmployService } from '../../services/employ.service';
import { Employ } from '../../models/employ.model';
import { Global } from '../../services/Global.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

declare function init_plugins();

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  public empleados: Array<Employ>;
  public url: string;
  public defaultImg: any;

  constructor( private employService: EmployService, private router: Router) {
    this.url = Global.url;
    this.defaultImg = '../assets/images/users/default.png';
   }

  ngOnInit(): void {
    init_plugins();
    this.obtenerEmpleados();
  }

  obtenerEmpleados(){
    this.employService.getEmploys().subscribe(
      resp => {
        this.empleados = resp.empleados;
        console.log(this.empleados);
        for ( let i = 0; i < this.empleados.length; i++ ) {
          console.log(this.empleados[i].img);
          if ( this.empleados[i].img === undefined){
            this.empleados[i].img = this.defaultImg;
          }
          console.log(this.empleados[i]);
        }
      }
    );
  }

eliminarEmpleado(id){
  swal({
    title: '¿Estas seguro?',
    text: 'Una vez borrado el empleado no podras recuperarlo!',
    icon: 'warning',
    buttons: ['cancelar', 'aceptar'],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      this.employService.deleteEmploy(id).subscribe(
        resp => {
          swal('El articulo ha sido borrado!', {
            icon: 'success',
          });
          this.obtenerEmpleados();
        }
      );
    } else {
      swal('Tranquilo, nada se ha borrado!');
    }
  });
  }

}

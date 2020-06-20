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

  public empleados: any;
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
        for ( let i = 0; i < this.empleados.length; i++ ) {
          if ( this.empleados[i].img === undefined || this.empleados[i].img === null){
            this.empleados[i].img = this.defaultImg;
          }
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
          swal('El empleado ha sido borrado!', {
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

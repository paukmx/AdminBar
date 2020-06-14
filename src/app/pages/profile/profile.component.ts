import { Component, OnInit } from '@angular/core';
import { EmployService } from '../../services/employ.service';
import { ActivatedRoute } from '@angular/router';
import { Employ } from '../../models/employ.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Global } from 'src/app/services/Global.service';


declare function init_plugins();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  public empleado: any;
  public url: string;

  constructor( private employService: EmployService, private route: ActivatedRoute) {
    this.url = Global.url;
   }

  ngOnInit(): void {
    init_plugins();
    this.obtenerEmpleado();
  }

  obtenerEmpleado() {

    this.route.params.subscribe(
      params => {
        const id = params.id;

        this.employService.getEmploy(id).subscribe(
          resp => {
            this.empleado = resp.empleado;
            console.log(this.empleado);
          }
        );
      }
    );

  }

}

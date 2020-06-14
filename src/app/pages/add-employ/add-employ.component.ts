import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employ } from 'src/app/models/employ.model';
import { EmployService } from 'src/app/services/employ.service';

declare function init_plugins();

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styles: [
  ]
})
export class AddEmployComponent implements OnInit {

  form: FormGroup;
  role: string;

  constructor( private employService: EmployService ) { 
    this.role = 'USER_ROLE';
  }

  ngOnInit(): void {
    init_plugins();
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellidos: new FormControl(null, Validators.required),
      email: new FormControl(null, [ Validators.required, Validators.email] ),
      telefono: new FormControl(null, [Validators.required, Validators.minLength(9)] ),
      role: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required)
    });
  }

  crearEmpleado(){

    // Calcular la edad a partir de la fecha
    const convertAge = new Date(this.form.value.edad);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    const showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

    const fecha = new Date();

    let employ = new Employ(
      this.form.value.nombre,
      this.form.value.apellidos,
      this.form.value.email,
      this.form.value.telefono,
      this.role,
      showAge,
      'Camarero',
      null,
      fecha

    );
    console.log(employ);

    this.employService.addEmploy(employ)
      .subscribe( resp => {
        console.log(resp)
      })
  }

  onItemChange(role){
    this.role = role;
    console.log(" Value is : ", this.form.value.role );
 }


}

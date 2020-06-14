import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employ } from 'src/app/models/employ.model';
import { EmployService } from 'src/app/services/employ.service';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/user.model';

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
  cargo: string;
  id: string;

  constructor( private employService: EmployService, private usersService: UsersService ) {
    this.role = 'USER_ROLE';
    this.cargo = 'Gerente';
  }

  ngOnInit(): void {
    init_plugins();
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellidos: new FormControl(null, Validators.required),
      email: new FormControl(null, [ Validators.required, Validators.email] ),
      telefono: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)] ),
      role: new FormControl(null, Validators.required),
      edad: new FormControl(null, Validators.required),
      usuario: new FormControl(null, Validators.required),
      pass1: new FormControl(null, Validators.required ),
      pass2: new FormControl(null, Validators.required )
    });
  }

  crearEmpleado(){

    // Calcular la edad a partir de la fecha
    const convertAge = new Date(this.form.value.edad);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    const showAge = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

    let employ = new Employ(
      this.form.value.nombre,
      this.form.value.apellidos,
      this.form.value.email,
      this.form.value.telefono,
      this.role,
      showAge,
      this.cargo,
      null,

    );
    console.log(employ);

    this.employService.addEmploy(employ)
      .subscribe( resp => {
        console.log(resp);
        this.id = resp.empleado._id;
        // let user = new User(
        //   this.form.value.usuario,
        //   this.form.value.pass1,
        //   this.id
        // );
      //   console.log(user);

      //   this.usersService.createUsers(user)
      //     .subscribe( resp => {
      //       console.log(resp);
      //     });

       });

    
  }

  // Obtenemos el rol del usuario/empleado
  onItemChange(role){
    this.role = role;
 }

 // Obtenemos el cargo del empleado
 onCargoChange(cargo){
   this.cargo = cargo;
 }


}

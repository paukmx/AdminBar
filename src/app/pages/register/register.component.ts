import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
// import swal from 'sweetalert';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';


declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login/login.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor( private usersService: UsersService) {}

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true,
      };
    };
  }

  ngOnInit(): void {
    init_plugins();

    this.form = new FormGroup(
      {
        nombre: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        password2: new FormControl(null, Validators.required),
        condiciones: new FormControl(false),
      },
      { validators: this.sonIguales('password', 'password2') }
    );
  }

  registrarUsuario(){

    if ( this.form.invalid ) {
      return;
    }

    if ( !this.form.value.condiciones ) {
      console.log( 'Debe de aceptar las condiciones');
      // swal('Importante!', 'Debe de aceptar las condiciones!', 'warning');
      return;
    }

    let user = new User(
      this.form.value.nombre,
      this.form.value.email,
      this.form.value.password
    );

    this.usersService.getUsers().subscribe(
      resp => {
        console.log(resp);
      }
    );

  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

declare function init_plugins();

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default-dark'
  };

  constructor( @Inject(DOCUMENT) private _document) { 
    this.cargarAjustes();
  }

  ngOnInit(): void {
    init_plugins();
    this.colocarCheck();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if ( localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema(this.ajustes.tema);
    } else {
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string) {
    const url = `assets/css/colors/${ tema }.css` ;
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

  cambiarColor(tema: string, link: any){

    this.aplicarCheck( link );

    this.aplicarTema(tema);
  }

  aplicarCheck(link: any){

    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  colocarCheck(){

    const selectores: any = document.getElementsByClassName('selector');

    const tema = this.ajustes.tema;

    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }
  }



}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

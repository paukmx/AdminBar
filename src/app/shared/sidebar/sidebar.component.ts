import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menu: any = [
    {
      titulo: 'Gestión',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'Empleados', url: '/employees'},
        {titulo: 'Productos', url: '/products'},
        {titulo: 'Horarios', url: '/horario'},
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

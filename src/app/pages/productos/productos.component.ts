import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}

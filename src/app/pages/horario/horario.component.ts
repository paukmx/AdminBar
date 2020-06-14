import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styles: [
  ]
})
export class HorarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}

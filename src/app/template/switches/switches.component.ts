import { Component, OnInit } from '@angular/core';

interface Switches {
  sexo: string;
  notificaciones: boolean;
  terminos: boolean;
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  data: Switches = {
    sexo: 'F',
    notificaciones: true,
    terminos: false
  }

  dataCopy: Switches = {...this.data}

  constructor() { }

  ngOnInit(): void {
  }

}

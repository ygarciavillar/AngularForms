import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface IPersona {
  sexo: string;
  notificaciones: boolean
}

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario!: FormGroup
  persona: IPersona = {
    sexo: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm(this.persona)
  }

  buildForm(p: IPersona) {
    this.miFormulario = this.fb.group({
     persona: this.fb.group(p),
      terminos: true
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miFormulario!: FormGroup

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: [, [Validators.required, Validators.min(0)]],
      existencia: [, [Validators.required, Validators.min(0)]]
    })
  }

  campoValido(campo: string){
    return( this.miFormulario.controls[campo].touched || 
           this.miFormulario.controls[campo].dirty) &&
           this.miFormulario.controls[campo].errors        
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return ;
    }

    else{
      console.log(this.miFormulario.value)
      this.miFormulario.reset()
    }
  }
}

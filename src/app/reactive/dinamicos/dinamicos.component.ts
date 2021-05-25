import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario!: FormGroup

  get favoritos(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      agregar: '',
      favoritos: this.fb.array([])
    })
  }

  addFavorito(){
     this.favoritos.push(new FormControl({value: this.miFormulario.get('agregar')?.value, disabled: true}))
     this.miFormulario.get('agregar')?.reset()
  }

  deleteFavorito(i: number){
    this.favoritos.removeAt(i)
  }

  campoValido(campo: string){
    return (this.miFormulario.controls[campo].touched ||
           this.miFormulario.controls[campo].dirty) &&
           this.miFormulario.controls[campo].errors
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return;
    }
    if(this.miFormulario.get('agregar')?.value){
      this.addFavorito()
    }

    this.miFormulario.patchValue({
      nombre: '',
      agregar: ''
    })
    console.log(this.miFormulario)
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('form') myForm!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    
    return this.myForm?.controls.nombreProducto?.invalid &&
           this.myForm?.controls.nombreProducto?.touched
   
  }

  precioValido(): boolean {
    
    return this.myForm?.controls.precioProducto?.touched &&
           this.myForm?.controls.precioProducto?.value < 0
      
  }
  

  guardar(){
    if(this.myForm.valid){

      console.log('Posteo Exitoso')
      this.myForm.resetForm()
    }
  }

}

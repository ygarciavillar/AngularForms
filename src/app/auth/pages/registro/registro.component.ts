import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuxValidators } from 'src/app/shared/validators/aux-validators';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  registroForm!: FormGroup

  get passwords(): FormGroup {
    return this.registroForm.get('passwords') as FormGroup
  }

  get password() {
    return this.registroForm.get('passwords.password')
  }

  get password2() {
    return this.registroForm.get('passwords.password2')
  }

  get emailErrorMsg(): string {
    const errors = this.registroForm.get('email')?.errors
    if(errors?.required){
        return 'Email Obligatorio'
    }
    if(errors?.pattern){
      return 'El email ingresado no tiene el formato adecuado'
    }
    if (errors?.emailTomado) {
      return 'El email ingresado ya fue tomado'
    }
    return ''
  }
  


  constructor(private fb: FormBuilder, 
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(AuxValidators.nombreApellidoPattern)]] ,
      email: ["",  
             [Validators.required, Validators.pattern(AuxValidators.emailPattern)],
             [this.emailValidator]],
      username: ['', [Validators.required, AuxValidators.noStride]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        password2: ['', [Validators.required]]
      },{
        validators: [AuxValidators.camposIguales('password', 'password2')]
      })
      
    })
  }

  campoValido(campo: string){
    return this.registroForm.get(campo)?.invalid
            && this.registroForm.get(campo)?.touched
  }

  registrar(){
    if(this.registroForm.invalid){
      this.registroForm.markAllAsTouched()
      return;
    }
    console.log("Formulario value", this.registroForm)
  }

}

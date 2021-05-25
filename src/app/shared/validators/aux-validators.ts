import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class AuxValidators {
  
    static nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    static emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    static noStride(control: FormControl): ValidationErrors | null {
        const valor = control.value?.trim().toLowerCase()
        if (valor === 'strider') {
            return { strider: true }
        }
        return null
    }

    static camposIguales(campo1: string, campo2: string): ValidatorFn{
      return (c: AbstractControl): ValidationErrors | null => {
          const control1 = c.get(campo1)
          const control2 = c.get(campo2)
          if(control1?.pristine || control2?.pristine){
              return null
          }
          if(control1?.value === control2?.value){
              control2?.setErrors(null)
              return null
          }
          
          control2?.setErrors({matcher: true})
          return {matcher: true}
        
      }
    }
}
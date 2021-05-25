import { AbstractControl } from "@angular/forms";

export function emailMatcher(c: AbstractControl): void | null {
    const email = c.get('email')
    const confirmEmail = c.get('confirmEmail')
    if (email?.pristine || confirmEmail?.pristine) {
        return null
    }

    if(email?.value !== confirmEmail?.value){
       confirmEmail?.setErrors({'match': true})
    }
    
    return null
}
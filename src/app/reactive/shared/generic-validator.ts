import { FormGroup } from "@angular/forms";



export class GenericValidator {

    constructor(private validationMessage: { [key: string]: { [key:string]: string }}) {}

    
    processMessages(container: FormGroup): {[key: string]: string}{
        let messages: {[key: string] : string} = {}
        for(const controlKey in container.controls){
            if (container.controls.hasOwnProperty(controlKey)){
                const c = container.controls[controlKey]
                if(c instanceof FormGroup){
                    let childMessages = this.processMessages(c)
                    messages = Object.assign(messages, childMessages)
                }
                else{
                    if(this.validationMessage[controlKey]){
                       messages[controlKey] = ''
                       if((c.touched || c.dirty) && c.errors){
                           Object.keys(c.errors).map(
                               errorKey => {
                                   if(this.validationMessage[controlKey][errorKey]){
                                       messages[controlKey] += this.validationMessage[controlKey][errorKey] + ''
                                   }
                               }
                           )
                       }
                    }
                }
            }
        }

        return messages
    }
    
}


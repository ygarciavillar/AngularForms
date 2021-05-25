import { GenericValidator } from './../shared/generic-validator';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {debounceTime} from 'rxjs/operators'

import { Customer } from 'src/app/template/customers/customer';
import { emailMatcher } from '../shared/validators/emailMatcher';
import { rateValidator } from '../shared/validators/rateValidator';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [
  ]
})
export class CustomersComponent implements OnInit {

  customer: Customer = new Customer()
  customerForm!: FormGroup ;


  displayMessage: {[key: string]: string} = {};
  private validationMessage: {[key: string] : {[key:string]: string}}
  private genericValidator: GenericValidator
  
  get addresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses')
  }
  
  constructor(private fb: FormBuilder) { 
    this.validationMessage = {
      firstName: {
        required: 'Please enter your first name.',
        minlength: 'The first name must be longer than 3 characters.'
      },
      lastName: {
        required: 'Please enter your first name.',
        minlength: 'The last name must be longer than 3 characters.'
      },
      email: {
        required: 'Please enter the email.',
        email: 'Please enter a valid email.'
      },
      confirmEmail: {
        required: 'Please confirm your email.',
        match: 'The confirmation does not match the email address.'
      },
      phone: {
        required: 'Please enter your phone number'
      },
      rating: {
        range: ' Please rate your experience from 1 to 5.'
      }
    }
    this.genericValidator = new GenericValidator(this.validationMessage)
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['',  [Validators.required, Validators.minLength(3)]],
      lastName:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', [Validators.required]],
      }, {validator: emailMatcher }),
      phone: '',
      notification: 'email',
      rating: [null, rateValidator(1,5)],
      sendCatalog: true,
      addresses:  this.fb.array([ this.buildAddress() ])
    })

    this.customerForm.valueChanges.pipe(
        debounceTime(1000)
    ).subscribe(
      value => {
        this.displayMessage = this.genericValidator.processMessages(this.customerForm)
      }
    )
   
    this.customerForm.get('notification')?.valueChanges.subscribe(
      value => this.setNotification(value)
    )

  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  addAddress(): void {
    this.addresses.push(this.buildAddress())
  }

  setNotification(notifyVia: string): void{
   const phoneControl = this.customerForm.get('phone')
   if(notifyVia === 'text'){
     phoneControl?.setValidators(Validators.required)
   }
   else{
     phoneControl?.clearValidators()
   }
    phoneControl?.updateValueAndValidity()
  }

  loadData() {
    this.customerForm.patchValue({
      firstName: 'Yoa',
      lastName: 'Garcia'
    })
  }

  onSubmit(){
    console.log(this.customerForm)
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [
  ]
})
export class CustomersComponent implements OnInit {

  customer: Customer = new Customer();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(signupForm: NgForm){
    console.log(signupForm.form);
    console.log('Saved: ' + JSON.stringify(signupForm.value));
  }
}

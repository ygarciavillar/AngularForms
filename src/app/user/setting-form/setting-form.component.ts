import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserSetting } from '../interface/user-setting.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-setting-form',
  templateUrl: './setting-form.component.html',
  styles: [`
  .field-error{
    border: 1px solid red !important;
  }`
  ]
})
export class SettingFormComponent implements OnInit {

  originalUserSetting: UserSetting = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscripttionType: '',
    notes: 'here are some notes...'
  }

  userSetting: UserSetting = {...this.originalUserSetting};

  postError: boolean = false;
  postErrorMessage: string = '';
  subscriptionType!: Observable<string[]> 
  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.subscriptionType = this.userService.getSubscriptionTypes()
  }

  onHttpError(errorResponse: any){
    console.log('Error response', errorResponse)
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.userService.postUserSettingForm(this.userSetting).subscribe(
      result => console.log('Submit succes', result),
        error => this.onHttpError(error)
      )      
    }
    else{
      this.postError = true;
      this.postErrorMessage ='Please fix some errors above'
    }

  }

}

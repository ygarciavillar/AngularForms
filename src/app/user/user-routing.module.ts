import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingFormComponent } from './setting-form/setting-form.component';

const routes: Routes = [
  {
    path: '',
    children: [ {path: 'user-setting', component: SettingFormComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule { }

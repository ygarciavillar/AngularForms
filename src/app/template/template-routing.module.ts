import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { CustomersComponent } from './customers/customers.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TemplateRoutingModule { }

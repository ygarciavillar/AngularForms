import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';


import { CustomersComponent } from './customers/customers.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'basicos', component: BasicosComponent},
    { path: 'dinamicos', component: DinamicosComponent },
    { path: 'switches', component: SwitchesComponent },
    { path: 'customers', component: CustomersComponent },
    {path: '**', redirectTo: 'basicos'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ReactiveRoutingModule { }

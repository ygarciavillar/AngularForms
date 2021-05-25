import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidmenuComponent } from './sidmenu/sidmenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SidmenuComponent]
})
export class SharedModule { }

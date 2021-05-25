import { Component } from '@angular/core';
import { MenuItem } from './menuItem.interface';

@Component({
  selector: 'app-sidmenu',
  templateUrl: './sidmenu.component.html',
  styles: [`
  li{
    cursor: pointer;
  }
  `
  ]
})
export class SidmenuComponent {

  templateMenu: MenuItem [] = [
    {texto: 'Basicos', ruta: './template/basicos'},
    {texto: 'Dinamicos', ruta: './template/dinamicos'},
    {texto: 'Switches', ruta: './template/switches'},
    {texto: 'SignUp', ruta: './template/customers' }
  ]

  reactiveMenu: MenuItem[] = [
    { texto: 'Basicos', ruta: './reactive/basicos' },
    { texto: 'Dinamicos', ruta: './reactive/dinamicos' },
    { texto: 'Switches', ruta: './reactive/switches' },
    { texto: 'SignUp', ruta: './reactive/customers' }
  ]

  authMenu: MenuItem[] = [
    { texto: 'Login',    ruta: './auth/login'},
    { texto: 'Registro', ruta: './auth/registro'},
  ]
}

import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Yoa',
    favoritos: [{id: 1, nombre: 'Fifa 12'}, {id: 2, nombre: 'COF'}],
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregarFavorito(){
    if(this.nuevoJuego){
      const id = this.persona.favoritos.length + 1;
      const favorito: Favorito = {
        id,
        nombre: this.nuevoJuego
      }
      this.persona.favoritos.push({ ...favorito })
      this.nuevoJuego = ""
    }
    
  }

  eliminarFavorito(index: number){
    this.persona.favoritos.splice(index, 1)
  }

  guardar(){
    console.log('Guardando form')
  }

}

import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  standalone: true,
})
export class Header {

  titulo = 'Gestion de incidencias';
  usuario = 'miguel';
  mostrarSeccion = true;
  botonDeshabilitado = false;

  cambiarTitulo(): void {

    this.titulo = '¡Título cambiado!';

  }

  toggleSeccion(): void {
  
    this.mostrarSeccion = !this.mostrarSeccion;
  
  }

}

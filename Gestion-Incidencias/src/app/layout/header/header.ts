import { Component } from '@angular/core';
import { INCIDENTS } from '../../core/data/mock-data';

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
  incidencias =  INCIDENTS;

  cambiarTitulo(): void {

    this.titulo = 'esta es nuestra lista de incidencias';

  }

  toggleSeccion(): void {
  
    this.mostrarSeccion = !this.mostrarSeccion;
  
  }

}

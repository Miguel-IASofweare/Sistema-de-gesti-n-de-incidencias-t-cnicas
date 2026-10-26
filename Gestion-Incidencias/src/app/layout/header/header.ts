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
  botonDeshabilitado = false;

  cambiarTitulo(): void {

    this.titulo = 'esta es nuestra lista de incidencias';

  }

}

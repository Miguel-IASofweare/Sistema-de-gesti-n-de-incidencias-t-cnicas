import { Component } from '@angular/core';
import { UserInfo } from '../../shared/user-info/user-info';

@Component({
  imports: [UserInfo],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
  standalone: true,
})
export class Header {

  titulo = 'Gestion de incidencias';
  usuario = 'UserInfo';
  botonDeshabilitado = false;

  cambiarTitulo(): void {

    this.titulo = 'esta es nuestra lista de incidencias';

  }

}

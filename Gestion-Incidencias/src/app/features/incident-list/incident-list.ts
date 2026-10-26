import { Component } from '@angular/core';
import { INCIDENTS } from '../../core/data/mock-data';

@Component({
  imports: [],
  selector: 'app-incident-list',
  styleUrl: './incident-list.scss',
  templateUrl: './incident-list.html',
})
export class IncidentList {

  mostrarSeccion = true;
  incidencias =  INCIDENTS;

  toggleSeccion(): void {
  
    this.mostrarSeccion = !this.mostrarSeccion;
  
  }

}

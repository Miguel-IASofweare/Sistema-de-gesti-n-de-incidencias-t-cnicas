import { Component } from '@angular/core';
import { INCIDENTS } from '../../core/data/mock-data';
import { IncidentCard } from '../../shared/incident-card/incident-card';
import { incident } from '../../core/models/incident.model';

@Component({
  imports: [IncidentCard],
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

  onSelected(id: string): void {

    console.log(
      'Incidencia seleccionada:',
      id
    );
  }

  onDeleted(id: string): void {

  this.incidencias =
    this.incidencias.filter(
      item => item.id !== id
    );

  }

}

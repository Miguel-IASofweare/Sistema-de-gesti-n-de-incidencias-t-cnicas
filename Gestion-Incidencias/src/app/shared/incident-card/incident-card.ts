import { Component, input, output } from '@angular/core';
import { incident } from '../../core/models/incident.model';

@Component({
  imports: [],
  selector: 'app-incident-card',
  styleUrl: './incident-card.scss',
  templateUrl: './incident-card.html',
  standalone: true,
})

export class IncidentCard {

  incident = input.required<incident>();

  selected = output<string>();

  seleccionar(): void {

  this.selected.emit(
    this.incident().id
  );
  
}

deleted = output<string>();

eliminar(): void {

  this.deleted.emit(
    this.incident().id
  );

}


}

import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { INCIDENTS } from './core/data/mock-data';
import { IncidentList } from './features/incident-list/incident-list';
import { incident } from './core/models/incident.model';

@Component({

  imports: [
    Header,
    Footer,
    IncidentList
  ],

  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Gestion-Incidencias');
}

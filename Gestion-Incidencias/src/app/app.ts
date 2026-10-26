import { Component, signal } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { UserInfo } from './shared/user-info/user-info';
import { INCIDENTS } from './core/data/mock-data';

@Component({

  imports: [
    Header, 
    Footer,
    UserInfo
  ],

  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Gestion-Incidencias');
}

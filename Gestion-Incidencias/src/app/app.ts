import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { UserInfo } from './shared/user-info/user-info';

@Component({

  imports: [
    RouterOutlet, 
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

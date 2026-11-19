import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { ListaItems } from './components/lista-items/lista-items';

@Component({
  selector: 'app-root',
  imports: [Header, ListaItems],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-spa-angular');
}
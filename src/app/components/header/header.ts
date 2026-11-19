import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html', // Ajusta a './header.component.html' si así se llama tu archivo
  styleUrl: './header.css'    // Ajusta a './header.component.css' si así se llama tu archivo
})
export class Header {
  // Punto 4: variables en TypeScript mostradas con {{ }}
  titulo: string = 'SPA Básica con Angular y Bootstrap';
  subtitulo: string = 'Práctica con componentes, *ngFor, @HostBinding y variables #';

  // Punto 7: @HostBinding aplicado al elemento <app-header>
  @HostBinding('class.d-block') displayBlock: boolean = true;
  @HostBinding('class.mb-4') margenInferior: boolean = true;
}
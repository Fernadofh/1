import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ElementoLista {
  id: number;
  nombre: string;
  detalle: string;
}

@Component({
  selector: 'app-lista-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-items.html',
  styleUrl: './lista-items.css'
})
export class ListaItems {
  // Punto 5: array de objetos mostrado en el navegador
  elementos: ElementoLista[] = [
    { id: 1, nombre: 'Instalar Bootstrap', detalle: 'Paquete npm y CSS global' },
    { id: 2, nombre: 'Directiva *ngFor', detalle: 'Renderizado dinámico en <ul> y <li>' },
    { id: 3, nombre: 'Variables de plantilla #', detalle: 'Captura de inputs en el formulario' }
  ];

  // Puntos 9 y 10: agrega un nuevo objeto al array y actualiza la vista de forma reactiva
  agregarElemento(nombre: string, detalle: string): void {
    const nombreLimpio = nombre.trim();
    const detalleLimpio = detalle.trim() || 'Elemento agregado';

    if (!nombreLimpio) {
      return;
    }

    this.elementos.push({
      id: Date.now(),
      nombre: nombreLimpio,
      detalle: detalleLimpio
    });
  }

  agregarDesdeFormulario(nombre: string, detalle: string): void {
    this.agregarElemento(nombre, detalle);
  }
}
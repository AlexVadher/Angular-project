import { Component } from '@angular/core';

@Component({
  selector: 'app-cabout',
  templateUrl: './cabout.component.html',
  styleUrl: './cabout.component.css'
})
export class CaboutComponent {
  about = {
    title: 'Acerca de este proyecto',
    description: 'Este proyecto fue creado con Angular, un marco de trabajo popular para aplicaciones web. El objetivo es demostrar cómo construir una aplicación sencilla con múltiples componentes y rutas.',
    team: 'Desarrollado por: Kevin Vasquez',
  };
}

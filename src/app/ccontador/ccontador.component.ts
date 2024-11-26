import { Component } from '@angular/core';


@Component({
  selector: 'app-ccontador',
  templateUrl: './ccontador.component.html',
  styleUrl: './ccontador.component.css'
})
export class CcontadorComponent {
  
  counter:number=10;
  
  handleIncrement(): void {
    this.counter++;
  }

  handleDecrement(): void {
    this.counter--;
  }
}

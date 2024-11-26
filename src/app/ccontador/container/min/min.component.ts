import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrl: './min.component.css'
})
export class MinComponent {
  @Input()
  counterMin:number = 0;

  @Output()
  emitMin: EventEmitter<number> = new EventEmitter<number>();
  decrement():void {
    console.log(this.counterMin);
    this.counterMin--;
    this.emitMin.emit(this.counterMin);
  }
}

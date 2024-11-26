import { Component, output } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  @Input()
  counterAdd:number = 0;

  @Output()
  emitAdd: EventEmitter<number> = new EventEmitter<number>();

  increment():void{
    console.log(this.counterAdd);
    this.counterAdd++;
    this.emitAdd.emit(this.counterAdd);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cake } from '../cake-list/cake';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {

  constructor() {

  }
  @Input()
  porcion!: number;

  @Input()
  max!: number;

  @Output()
  porcionChange: EventEmitter<number> = new EventEmitter<number>;

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>;


  ngOnInit(): void {

  }

  upQuantity(): void {
    if (this.porcion < this.max) {
      this.porcion++;
      this.porcionChange.emit(this.porcion);
    }
    else {
      this.maxReached.emit("No hay mas porciones :(")
    }
  }
  downQuantity(): void {
    if (this.porcion > 0) {
      this.porcion--;
      this.porcionChange.emit(this.porcion);
    }
  }

}

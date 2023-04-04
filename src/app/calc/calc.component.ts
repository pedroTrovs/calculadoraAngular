import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  n1: number  = 0;
  n2: number = 0;
  resultado: number = 0;

  sum()
  {
    this.resultado = this.n1 + this.n2;
  }

  subt()
  {
    this.resultado = this.n1 - this.n2;
  }

  mult()
  {
    this.resultado = this.n1 * this.n2;
  }

  div()
  {
    this.resultado = this.n1 / this.n2;
  }
}

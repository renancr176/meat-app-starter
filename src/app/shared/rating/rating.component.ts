import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Input() starsQty: number;
  @Output() rated = new EventEmitter<number>();

  rates: Array<number> = [];
  rate: number = 0;
  previousRate: number = 0;

  constructor() { }

  ngOnInit() 
  {
    for(let i = 1; i <= this.starsQty; i++){
      this.rates.push(i);
    }
  }

  setRate(rate: number): void
  {
    this.rate = rate;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(rate: number): void
  {
    if (this.previousRate === undefined)
    {
      this.previousRate = rate;
    }

    this.rate = rate;
    this.rated.emit(this.rate);
  }

  clearTemporaryRate(): void
  {
    if (this.previousRate !== undefined)
    {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}

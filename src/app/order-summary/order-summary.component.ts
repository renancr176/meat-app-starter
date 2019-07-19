import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-summary',
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent implements OnInit {

  rated: boolean = false;

  constructor() { }

  ngOnInit() {}

  ratedEvent(rateNumber: number): void
  {
    console.log(rateNumber);
    this.rated = true;
  }
}

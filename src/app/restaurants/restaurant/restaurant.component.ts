import { Component, OnInit, Input } from '@angular/core';

//#region Models
import { Restaurant } from './restaurant.model';
//#endregion

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

}

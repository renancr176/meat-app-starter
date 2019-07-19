import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from 'app/services/restaurant.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.restaurantService.restaurantsById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
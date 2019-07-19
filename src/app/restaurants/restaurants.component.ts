import { Component, OnInit, OnDestroy } from '@angular/core';

//#region Services
import { RestaurantService } from 'app/services/restaurant.service';
//#endregion

//#region Models
import { Restaurant } from './restaurant/restaurant.model';
//#endregion

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit , OnDestroy
{
  

  restaurants: Array<Restaurant> = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() 
  {
    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  ngOnDestroy(): void 
  {
    
  }

}

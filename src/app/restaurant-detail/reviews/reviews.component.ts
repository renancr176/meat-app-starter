import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from 'app/services/restaurant.service';
import { Review } from './review.model';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review>;

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.reviews = this.restaurantService.reviews(this.route.parent.snapshot.params['id']);
  }

}

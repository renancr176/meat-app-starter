import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from '../app.api'
import { ErrorHandler } from 'app/app.error-handler';

//#region Models
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { Review } from 'app/restaurant-detail/reviews/review.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
//#endregion

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  restaurants(): Observable<Array<Restaurant>>
  {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  restaurantsById(id: string): Observable<Restaurant>
  {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  reviews(id: string): Observable<Review>
  {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  menu(id: string): Observable<Array<MenuItem>>
  {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }
}

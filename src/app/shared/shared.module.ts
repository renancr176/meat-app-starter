import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//#region Services
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantService } from '../services/restaurant.service';
import { OrderService } from '../order/order.service';
//#endregion

//#region Components
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
//#endregion

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    InputComponent,
    RadioComponent,
    RatingComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: SharedModule,
      providers: [
        ShoppingCartService,
        RestaurantService,
        OrderService
      ]
    }
  }


}

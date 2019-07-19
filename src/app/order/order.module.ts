import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './order.routes';

import { SharedModule } from 'app/shared/shared.module';

//#region Components
import { OrderComponent } from './order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
//#endregion

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class OrderModule { }

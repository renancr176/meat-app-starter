import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: OrderSummaryComponent}
]

import { SharedModule } from 'app/shared/shared.module';

import { OrderSummaryComponent } from './order-summary.component';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [OrderSummaryComponent]
})
export class OrderSummaryModule { }

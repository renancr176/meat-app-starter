import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

//#region Services
import { OrderService } from './order.service';
//#endregion

//#region Models
import { RadioOptionModel } from 'app/shared/radio/radio-option.model';
import { CartItemModel } from 'app/restaurant-detail/shopping-cart/cart-item-model';
import { OrderModel, OrderItemModel } from './order.model';
//#endregion

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  //#region Patterns
  emailPattern: RegExp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern: RegExp = /^[0-9]*$/
  //#endregion

  delivery: number = 8;
  paymentOptions: Array<RadioOptionModel> = [
    {label: 'Dinheir', value: 'MON'}
    ,{label: 'Cartão de Débito', value: 'DEB'}
    ,{label: 'Cartão de Crédito', value: 'CRED'}
    ,{label: 'Cartão Vale Refeição', value: 'REF'}
  ];

  orderForm: FormGroup;

  constructor(private orderService: OrderService, 
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() 
  {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    },
    {
      validator: OrderComponent.equalsTo
    });
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}
  {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    return ((!email || !emailConfirmation || email.value === emailConfirmation.value) ? undefined : {emailsNotMatch:true});
  }

  cartItems(): Array<CartItemModel>
  {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItemModel): void
  {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel): void
  {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItemModel): void
  {
    this.orderService.removeItem(item);
  }

  itemsValue(): number
  {
    return this.orderService.total();
  }

  checkOrder(order: OrderModel): void
  {
    order.items = this.cartItems()
      .map((item:CartItemModel) => 
        new OrderItemModel(
          item.quantity,
          item.menuItem.id
        )
      );
    
    console.log(order);

    this.orderService.checkOrder(order)
      .subscribe((orderId: string) =>
      {
        this.orderService.clear();
        this.router.navigate(['/order-summary']);
      });
  }

}

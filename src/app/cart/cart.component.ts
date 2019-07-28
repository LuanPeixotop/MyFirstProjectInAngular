import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    window.alert("Compra realizada. Obrigado pela preferência, sangue bom!")
    console.warn('Sua compra foi enviada. Vlw, parça!', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}

import { Component, OnInit } from '@angular/core';
//import { from } from 'rxjs';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {CartService} from '../../providers/cart.service';
import {AuthService} from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
  providers: [CartService,AuthService]
})
export class ProductDetailsPage {

  product : any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public cartService: CartService,
              public authService: AuthService 
             ) {
  }

  ionViewDidLoad() {
    this.product = this.navParams.data;
  }
  goBack() {
      this.navCtrl.pop();
  }

  addToCart(product)  : void  {
    this.cartService.addCartItem(this.authService.getLoggedUID(), this.product );
  }

}

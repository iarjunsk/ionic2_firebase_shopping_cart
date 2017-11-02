import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductsPage } from '../products/products';
import { LoginPage } from '../login/login';

import {AuthService} from '../../providers/auth.service';
import {SharedService} from '../../providers/shared.service';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AuthService,SharedService]
})
export class RegisterPage {
  email : string; 
  password : string; 
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthService,
              public sharedService: SharedService
             ) {
      this.authService.logout();
  }

  ionViewDidLoad() {
    if(this.authService.isLoggedIn()){
      this.navCtrl.setRoot(ProductsPage);
    }
  }


  register(){
    this.sharedService.showLoading();

    this.authService.signup(this.email,this.password).then(value => {
      this.sharedService.hideLoading();
      this.navCtrl.setRoot(ProductsPage);
    })
    .catch(err => {
      this.sharedService.hideLoading();
      this.sharedService.showToast("Something went wrong!")
    });
  }



}

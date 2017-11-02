import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductsPage } from '../products/products';
import { RegisterPage } from '../register/register';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';

import {AuthService} from '../../providers/auth.service';
import {SharedService} from '../../providers/shared.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService,SharedService]
})
export class LoginPage {
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

  login(){
    this.sharedService.showLoading(); // start loading

    this.authService.login(this.email,this.password).then(value => {
      this.sharedService.hideLoading(); // stop loading
      this.navCtrl.setRoot(ProductsPage);
    })
    .catch(err => {
      this.sharedService.hideLoading();
      this.sharedService.showToast("Something went wrong!")
    });
  }
  createAccount(): void{
    this.navCtrl.push(RegisterPage);
  }

  resetPassword():void{
    this.navCtrl.push(ForgotPassPage);
  }

}

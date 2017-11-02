import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {LoginPage} from '../login/login';
import {AuthService} from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
  providers: [AuthService]
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthService) {
  }

  ionViewDidLoad() {
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}

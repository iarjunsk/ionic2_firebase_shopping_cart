import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthService} from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
  providers: [AuthService]
})
export class ForgotPassPage {
  email : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
  }

  recover():void{
    this.authService.recover(this.email);
  }


}

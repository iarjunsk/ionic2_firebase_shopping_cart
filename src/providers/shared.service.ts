import {Injectable} from '@angular/core';
import { LoadingController, ToastController  } from 'ionic-angular';

@Injectable()
export class SharedService {

  loader : any;
  constructor(public loadingCtrl: LoadingController,
              public toastCtrl: ToastController
        ) {

    this.loader = this.loadingCtrl.create({
        content: "Please wait...",
        duration: 3000
      });
     
  }

  showLoading() : void {
    this.loader.present();
  }

  hideLoading() : void {
    this.loader.dismiss();
  }

  showToast(msg : string) : void {
    let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
    toast.present();
  }
  
}
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class HelperService {
  constructor(public toastCtrl: ToastController) { }

  random(range): number {
    return Math.floor(Math.random() * range);
  }

  presentToast(txt) {
    let toast = this.toastCtrl.create({
      message: txt,
      duration: 5000,
      position: 'bottom',
      showCloseButton: true,
      // closeButtonText: 'Got it!',
      dismissOnPageChange: true
    });

    toast.present();
  }
  
}

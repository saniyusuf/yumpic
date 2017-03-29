import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { YumpicService } from '../../providers/yumpic-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public yumpicService: YumpicService,
    public navCtrl: NavController,
    private alertCtrl: AlertController) {

  }

  showLogout(){
    let logoutAlertController = this.alertCtrl.create({
      message: 'Are You Sure You Want To Log Out?',
      title: 'Log Out',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Log Out',
          cssClass: 'primary',
          handler: ()=> {
            this.yumpicService.logout()
              .then(()=> this.navCtrl.setRoot(LoginPage));
          }
        }
      ]
    });
    logoutAlertController.present();
  }

}

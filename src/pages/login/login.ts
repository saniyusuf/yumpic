import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { BackandService } from '@backand/angular2-sdk';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public loginDetails = {
    email: '',
    password: ''
  };

  constructor(private backandService: BackandService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  loginWithEmail(){
    console.log(this.loginDetails);
    this.backandService.signin(this.loginDetails.email, this.loginDetails.password)
      .then(res => console.log(res))
      .catch(res => console.log(res))
  }

  loginWithGoogle(){
    this.backandService.socialSignin('google')
      .then(res => console.log(res))
      .catch(res => console.log(res))
  }

  loginWithFacebook(){
    this.backandService.socialSignin('facebook')
      .then(res => console.log(res))
      .catch(res => console.log(res))
  }

  goToTabsPage(){
    this.navCtrl.push(TabsPage);
  }

}

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BackandService } from '@backand/angular2-sdk';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage = TabsPage;
  rootPage = LoginPage;

  private APP_NAME = 'yumpic';
  private ANONYMOUS_TOKEN = '4c5d65de-2a4e-4ec8-9a56-85c56e05321d';
  private SIGN_UP_TOKEN = 'f89e1974-4cf5-4524-b4fa-25970bda916b';

  constructor(platform: Platform, private backandService: BackandService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.backandService.init({
        appName: this.APP_NAME,
        anonymousToken: this.ANONYMOUS_TOKEN,
        signUpToken: this.SIGN_UP_TOKEN,
        mobilePlatform: 'ionic',
        isMobile: true
      })
    });
  }

}

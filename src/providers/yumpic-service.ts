import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BackandService } from '@backand/angular2-sdk';


/*
  Generated class for the YumpicService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class YumpicService {

  constructor(public http: Http, private backandService: BackandService) {

  }

  logout(): Promise<any>{
    return new Promise((resolve)=>{
      window.localStorage.removeItem('loginToken');
      resolve();
    });
  }

  loginWithFacebook(){

  }

}

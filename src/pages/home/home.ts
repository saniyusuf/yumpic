import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CreatePostPage } from '../create-post/create-post';

import { BackandService } from '@backand/angular2-sdk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private backandService: BackandService) {
  }

  ionViewDidLoad(){
    this.backandService.object.getList('film')
      .then((res)=>{
        console.log("FILM => ", res)
      })
      .catch(res => console.log(res))
  }

  addNewPost(){
    this.navCtrl.push(CreatePostPage);
  }

}

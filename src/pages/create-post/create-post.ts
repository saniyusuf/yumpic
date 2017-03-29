import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';

import { BackandService } from '@backand/angular2-sdk';

/*
  Generated class for the CreatePost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-post',
  templateUrl: 'create-post.html'
})
export class CreatePostPage {

  public selectedImage = '';
  public caption = '';

  constructor(private backandService: BackandService, public navCtrl: NavController, public navParams: NavParams) {}

  selectImage(){
    Camera.getPicture({
      destinationType: 0,
      sourceType: 0
    })
      .then(imageData=> this.selectedImage = `data:image/jpeg;base64,${imageData}`)
  }

  createPost(){
    this.backandService.object.create('post', {
      imageUrl: this.selectedImage,
      caption: this.caption
    })
      .then(res=> console.log(res))
      .catch(res=> console.log('Bad ', res.JSON()));
  }

}

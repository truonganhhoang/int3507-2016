import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/*
  Generated class for the VideoPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html'
})

export class VideoPlayer {
	video: Object;
	url: any;

  constructor(public navCtrl: NavController, private navParams: NavParams, private domSanitizer: DomSanitizer) {
  	 this.video = this.navParams.get('video');
  	 this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.video['id']['videoId']);
  }

  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('Hello VideoPlayer Page');
  }

}

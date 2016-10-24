import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YtbSearchService } from '../../services/ytbsearch.service';
import { VideoPlayer } from '../video-player/video-player';



/*
  Generated class for the Sing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sing',
  templateUrl: 'sing.html',
  providers: [YtbSearchService]
})
export class Sing {
	videos: Object[];
	myQuery: String;
  constructor(public navCtrl: NavController, private ytbSearchService: YtbSearchService) {}

  ionViewDidLoad() {
    console.log('Hello Sing Page');
  }

   getVideos() {
   	this.ytbSearchService.getVideos(this.myQuery + 'lyric').then(res => {
  		this.videos = res['items'];
  	});
   }

   playVideo(video) {
    this.navCtrl.push(VideoPlayer, {video: video });
  }

}

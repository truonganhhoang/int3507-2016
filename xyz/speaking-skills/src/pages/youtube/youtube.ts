import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YtbSearchService } from '../../services/ytbsearch.service';
import { VideoPlayer } from '../video-player/video-player';


/*
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-youtube',
  templateUrl: 'youtube.html',
  providers: [YtbSearchService]
})
export class Youtube {
	videos: Object[];

  constructor(public navCtrl: NavController, private ytbSearchService: YtbSearchService) {
  	this.ytbSearchService.getVideos('speaking+english').then(res => {
  		this.videos = res['items'];
  	});
  }

  ionViewDidLoad() {
    console.log('Hello Youtube Page');
  }
  playVideo(video) {
        //go to play-video.html and send the video variable (the selected video)
        this.navCtrl.push(VideoPlayer,  {video: video });
  }

}

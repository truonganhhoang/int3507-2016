import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YtbSearchService } from '../../services/ytbsearch.service';
import { VideoPlayer } from '../video-player/video-player';
import { LoadingPage } from '../../components/loading-indicator/loading-indicator';

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

export class Sing extends LoadingPage implements OnInit {
	videos: Object[];
	myQuery: String = "";
  singType: String = 'karaoke';
  noResult: boolean = false;

  constructor(public navCtrl: NavController, private ytbSearchService: YtbSearchService) {
    super(true);
  }

  ionViewDidLoad() {
    console.log('Hello Sing Page');
  }

  ngOnInit() {
    this.ytbSearchService.getTopVideos().then(res => {
      this.videos = res['items'];
      this.noResult = false;
      this.ready();
    })
  }

  getVideos() {
    this.noResult = false;
    this.standby();
    if (this.myQuery == '' || this.myQuery == null) {
      this.ready();
      this.noResult = true;
      return;
    }
   	this.ytbSearchService.getVideos(this.myQuery + ' ' + this.singType).then(res => {
  		this.videos = res['items'];
      if(this.videos.length == 0 ) {
        this.noResult = true;
      }
      this.ready();
  	});
  }

  playVideo(video) {
    this.navCtrl.push(VideoPlayer, {video: video});
  }
}

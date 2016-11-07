import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SongService} from '../../services/song.service';
import { MediaPlugin } from 'ionic-native';

declare var cordova: any;

/*
  Generated class for the MySong page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-song',
  templateUrl: 'my-song.html',
  providers: [ SongService ]
})
export class MySong implements OnInit, OnDestroy {

  arrSong: Object[] = [];
  curSong: Object;
  audio: MediaPlugin;
  duration: any;
  timeRun: any;
  //interval
  timerDur: any;
  timerPercent: number = 0;
  isRun: boolean = false;

  constructor(public navCtrl: NavController, private songService: SongService) {}

  ngOnInit() {
    this.songService.getSong().then(res => {
      if (res == null) { 
        this.arrSong = [];
      } else {
        this.arrSong = res;
        for (let i = 0; i < this.arrSong.length; i ++) {
          this.arrSong[i]['isPlay'] = false;
        }
        console.log(this.arrSong);
      }
    });  
  }

  ngOnDestroy() {
    if(this.audio != null) this.audio.release();
  }

  ionViewDidLoad() {
    console.log('Hello MySong Page');
  }


  playAudio(item) {
    this.isRun = true;
    clearInterval(this.timerDur);
    if(this.audio != null) this.audio.release();
    for (let i = 0; i < this.arrSong.length; i ++) {
      this.arrSong[i]['isPlay'] = false;
    }

    item['isPlay'] = true;
    let name: string = item['videoId'];
    this.audio = new MediaPlugin(this.getPathFile(name));
    this.audio.play();

    // Get duration
    var dur = this.audio.getDuration();
    var num = 0;
    var counter = 0;
    this.timerDur = setInterval(() =>{
      counter = counter + 100;
      if (dur < 0) {
        let dur = this.audio.getDuration();
        num = dur;
        this.duration = this.secondsToHms(dur);
      }
      this.timerPercent = ((counter/1000))*100/num;
      this.timeRun = this.secondsToHms(counter/1000);
      if (num > 0 && counter/1000 > num) {
        this.timeRun = this.duration;
        this.isRun = false;
        this.timerPercent = 100;
        this.stopAudio(item);
        //clearInterval(this.timerDur);
      }
    }, 100);  

  }

  stopAudio(item) {
    clearInterval(this.timerDur);
    item['isPlay'] = false;
    this.isRun = false;
    this.audio.stop();
    //this.duration = this.secondsToHms(this.audio.getDuration());
  }

  touchRecord(item, isPlay) {
    this.curSong = item;
    if(!isPlay) this.playAudio(item);
    else this.stopAudio(item);
  }

  private getPathFile(name: String): string {
    let path: string = cordova.file.externalApplicationStorageDirectory;
    return path + name + '.mp3';
  }

  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s); 
  }

}

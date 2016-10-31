import { Component, OnInit } from '@angular/core';
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
export class MySong implements OnInit {

  arrSong: Object[] = [];
  audio: MediaPlugin;

  constructor(public navCtrl: NavController, private songService: SongService) {}

  ngOnInit() {
    this.songService.getSong().then(res => {
      if (res == null) { 
        //alert('chưa có bảng');
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

  ionViewDidLoad() {
    console.log('Hello MySong Page');
  }

  playAudio(item) {
    for (let i = 0; i < this.arrSong.length; i ++) {
      this.arrSong[i]['isPlay'] = false;
    }
    item['isPlay'] = true;

    let name: string = item['videoId'];
    this.audio = new MediaPlugin(this.getPathFile(name));
    this.audio.play();
  }

  stopAudio(item) {
    item['isPlay'] = false;
    this.audio.stop();
  }

   private getPathFile(name: String): string {
    let path: string = cordova.file.externalApplicationStorageDirectory;
    return path + name + '.mp3';
  }


}

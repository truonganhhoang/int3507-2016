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

  arrSong: Object[];

  constructor(public navCtrl: NavController, private songService: SongService) {}

  ngOnInit() {
    this.songService.getSong().then(res => {
      this.arrSong = res;
      console.log(this.arrSong);
    });  
  }

  ionViewDidLoad() {
    console.log('Hello MySong Page');
  }

  playAudio(item) {
    let name: string = item['videoId'];
    let audio = new MediaPlugin(this.getPathFile(name));
    audio.play();
  }

   private getPathFile(name: String): string {
    let path: string = cordova.file.externalApplicationStorageDirectory;
    return path + name + '.mp3';
  }


}

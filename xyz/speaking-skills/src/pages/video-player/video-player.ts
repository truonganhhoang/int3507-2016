import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaPlugin } from 'ionic-native';
import { SongService} from '../../services/song.service'

/*
  Generated class for the VideoPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var cordova: any;

@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
  providers: [ SongService ]
})

export class VideoPlayer {
	video: Object;
	url: any;
  platform: Platform;
  private _fileRecord: MediaPlugin;
  isRecord: boolean = false;
  isEnd: boolean = false;
  private _pathFile: string;

  constructor(public navCtrl: NavController, private songService: SongService, private navParams: NavParams, private domSanitizer: DomSanitizer, platform: Platform) {
  	this.platform = platform;
    this.video = this.navParams.get('video');
  	this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.video['id']['videoId']+'?version=3&enablejsapi=1');
  }

  ngOnInit() {

  }

  startRecord() {
    document.getElementById("video-player")['contentWindow'].postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    this.isRecord = true;
    if (!this.platform.is('cordova')) return;
    this._pathFile = this.getPathFile(this.video['id']['videoId']);
    this._fileRecord = new MediaPlugin(this._pathFile);
    this._fileRecord.startRecord();
  }

  stopRecord() {
    //stop video
    document.getElementById("video-player")['contentWindow'].postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    if (!this.platform.is('cordova')) return;
    this._fileRecord.stopRecord();
    this.isEnd = true;

    let song : Object = {};
    song['videoId'] = this.video['id']['videoId'];
    song['title'] = this.video['snippet']['title'];
    this.songService.saveSong(song);
  }

  playRecord(){
    alert(this._pathFile);
    if (!this.platform.is('cordova')) return;
    this._fileRecord = new MediaPlugin(this._pathFile);
    this._fileRecord.play();
  }


  ionViewDidLoad() {
    console.log('Hello VideoPlayer Page');
  }

  private getPathFile(name: String): string {
    let path: string = cordova.file.externalApplicationStorageDirectory;
    return path + name + '.mp3';
  }

}

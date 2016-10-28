import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaPlugin } from 'ionic-native';
import { File } from 'ionic-native';

/*
  Generated class for the VideoPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var cordova: any;

@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html'
})

export class VideoPlayer {
	video: Object;
	url: any;
  platform: Platform;
  private _fileRecord: MediaPlugin;
  private _pathFile: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private domSanitizer: DomSanitizer, platform: Platform) {
  	this.platform = platform;
    this.video = this.navParams.get('video');
  	this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.video['id']['videoId']);
  }

  ngOnInit() {

  }

  startRecord() {
    console.log(this.video['id']['videoId']);
    if (!this.platform.is('cordova')) return;
    this._pathFile = this.getPathFile('test');
    this._fileRecord = new MediaPlugin(this._pathFile);
    this._fileRecord.startRecord();
  }

  stopRecord() {
    console.log('stop');
    if (!this.platform.is('cordova')) return;
    this._fileRecord.stopRecord();
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

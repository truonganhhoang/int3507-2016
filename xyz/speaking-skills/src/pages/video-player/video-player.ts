import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaPlugin } from 'ionic-native';
import { SongService} from '../../services/song.service';
import { DriveService } from '../../services/drive.service';
import { AppGlobals } from '../../services/app-globals.service';
import { File } from 'ionic-native';


/*
  Generated class for the VideoPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var cordova: any;

@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
  providers: [ SongService, DriveService ]
})

export class VideoPlayer {
	video: Object;
	url: any;
  platform: Platform;
  private _fileRecord: MediaPlugin;
  isRecord: boolean = false;
  isEnd: boolean = false;
  private _pathFile: string;
  idFolder: String;
  access_token: String;
  isLogin: boolean = false;

  constructor(public navCtrl: NavController, 
   private songService: SongService, private driveService: DriveService, 
   private appGlobals: AppGlobals,
   private navParams: NavParams, private domSanitizer: DomSanitizer, platform: Platform) {
  	this.platform = platform;
    this.video = this.navParams.get('video');
  	this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.video['id']['videoId']+'?version=3&enablejsapi=1');
  }

  ngOnInit() {
    this.appGlobals.access_token.subscribe(value => {
      this.access_token = value;
      if(value != '') {
        this.isLogin = true;
      }

      this.driveService.getIdFolderSpeak(this.access_token).then(res => {
        this.idFolder = res;
      });

    });
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
    this.isEnd = true;
    document.getElementById("video-player")['contentWindow'].postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    if (!this.platform.is('cordova')) return;
    this._fileRecord.stopRecord();
  }

  saveSong() {
    let song : Object = {};
    song['videoId'] = this.video['id']['videoId'];
    song['title'] = this.video['snippet']['title'];
    this.songService.saveSong(song);
  }

  playRecord() {
    if (!this.platform.is('cordova')) return;
    this._fileRecord = new MediaPlugin(this._pathFile);
    this._fileRecord.play();
  }

  uploadDrive() {
    if (this.access_token == '' ) { 
      alert('Please login to upload'); 
      return;
    }
    var name = this.video['id']['videoId'] + '.mp3';
    var callback;
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    File.readAsDataURL(cordova.file.externalApplicationStorageDirectory, name).then( res => {
      res = res.toString();
      let baseStr = ";base64,";
      var index = res.indexOf(';base64,')+ baseStr.length;
      res = res.substring(index);

      var contentType = 'audio/mp3' || 'application/octet-stream';
      var metadata = {
        'title': this.video['snippet']['title'],
        'mimeType': contentType,
        'parents':[{"id": this.idFolder}]
      };

      var base64Data = res;
      var multipartRequestBody =
          delimiter +
          'Content-Type: application/json\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n' +
          'Content-Transfer-Encoding: base64\r\n' +
          '\r\n' +
          base64Data +
          close_delim;

 
        gapi.client.load('drive', 'v2', () => {
          var request = gapi.client.request({
            'path': '/upload/drive/v2/files?access_token=' + this.access_token,
            'method': 'POST',
            'params': {'uploadType': 'multipart'},
            'headers': {
              'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
            },
            'body': multipartRequestBody});
            
            if (!callback) {
              callback = function(file) {
                if(file != false) alert('upload success');
                else alert('upload failed');
              };
            }
            request.execute(callback);
        });

      })

  }

  ionViewDidLoad() {
    console.log('Hello VideoPlayer Page');
  }

  private getPathFile(name: String): string {
    let path: string = cordova.file.externalApplicationStorageDirectory;
    return path + name + '.mp3';
  }

}

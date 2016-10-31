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

  constructor(public navCtrl: NavController, 
   private songService: SongService, private driveService: DriveService, private appGlobals: AppGlobals,
   private navParams: NavParams, private domSanitizer: DomSanitizer, platform: Platform) {
  	this.platform = platform;
    this.video = this.navParams.get('video');
  	this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.video['id']['videoId']+'?version=3&enablejsapi=1');
  }

  ngOnInit() {
    this.appGlobals.access_token.subscribe(value => {
      this.access_token = value;
      //alert(this.access_token);
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
    //stop video
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
    //alert(this._pathFile);
    if (!this.platform.is('cordova')) return;
    this._fileRecord = new MediaPlugin(this._pathFile);
    this._fileRecord.play();
  }

  getIdFolderSpeak() {
    gapi.client.load('drive', 'v2', () => {
        var request = gapi.client.request({
          path : 'https://www.googleapis.com/drive/v2/files?access_token=' + this.access_token,
          method : 'GET',
          params : {
            q: "title = 'Speaking' and trashed = false"
          }
        });

        request.execute((response) => {
          if(response.items.length == 0 ) { 
            alert('chưa có folder');
            return false;
          } else {
            for(var i = 0; i < response.items.length; i++) {
              if (response.items[i].title == 'Speaking') {
                alert('đã có folder');
                this.idFolder = response.items[i].id;
                alert('idFolder'+this.idFolder);
              }
            }      
            
          }
         
        });
      });
  }

  uploadDrive() {
    let title: string = this.video['snippet']['title'];
    alert(title);
    alert(this.idFolder);

    //Tạo folder mới nếu chưa có folder Speaking của app
    this.driveService.checkFolderExist(this.access_token).then(res => {
      console.log(res);
      if (res == false) {
        this.driveService.createNewFolder(this.access_token);
      }
    });
   // this.insertFile();
    
  }

  insertFile() {
   
    
  }

  ionViewDidLoad() {
    console.log('Hello VideoPlayer Page');
  }

  private getPathFile(name: String): string {
    let path: string = cordova.file.externalApplicationStorageDirectory;
    return path + name + '.mp3';
  }

}

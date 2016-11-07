import { Component, OnInit } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular'; 
import { RecordService } from '../../services/record.service';
import { WordService } from '../../services/word.service'
import { MediaPlugin } from 'ionic-native';
import { File } from 'ionic-native';
import { TextToSpeech } from 'ionic-native';
import { AppGlobals } from '../../services/app-globals.service';

declare var cordova: any;

/*
  Generated class for the Record page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
  providers: [ RecordService, WordService ]
})
export class Record implements OnInit {

  ionViewDidLoad() {
    console.log('Hello Record Page');
  }

  platform: Platform;
  categoryName: String;
	words: Object[];
	records: Object[];
  private _fileRecord: MediaPlugin;
  private _pathFile: string;
  access_token: string;

  constructor(private navCtrl: NavController, 
    private recordService: RecordService, private wordService: WordService, private appGlobals: AppGlobals,
    platform: Platform, private navParams: NavParams) {
    this.platform = platform;
    let categoryId = this.navParams.get('category').id;
    this.categoryName = this.navParams.get('category').name;
  
  	this.wordService.getWord2(categoryId).then(res => {
      this.words = res;
      if(!this.platform.is('cordova')) return;
      for (let i = 0; i < this.words.length; i++) {
        var nameFile = this.words[i]['content'] + '.mp3';
        let fs = cordova.file.externalRootDirectory;
        File.checkFile(fs, nameFile).then(
              _ => {
                this.words[i]['url'] = this.words[i]['content'];
              }
            ).catch(err => {
                this.words[i]['url'] = null;
              }
            );
      }
    });
  }


  ngOnInit() {
    this.appGlobals.access_token.subscribe(value => {
      this.access_token = value;
    });
      
  }

  tts(text): void {
    console.log(text);
    TextToSpeech.speak(text)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  //truyền vào từ word đang cần record
  startRecord(word: Object) {
    word['isRecording'] = true;
    if(!this.platform.is('cordova')) return;
    this._pathFile = this.getPathFile(word['content']);
    this._fileRecord = new MediaPlugin(this._pathFile);
    this._fileRecord.startRecord();
  }

  stopRecord(word: Object) {
    word['isRecording'] = false;
    if(!this.platform.is('cordova')) return;
    this._fileRecord.stopRecord();
    word['url'] = word['content'];

    // var record: Object = {};
    // record['word_id'] = word['id'];
    // record['url'] = this._pathFile;

    //Lưu vào mlab
    // this.recordService.createRecord(record);
   
  }

  playRecord(item){
    let path = this.getPathFile(item.content);
    if(!this.platform.is('cordova')) return;
    this._fileRecord = new MediaPlugin(path);
    this._fileRecord.play();
  }

  private getPathFile(name: String): string {
      let path: string = cordova.file.externalRootDirectory;
      return path + name + '.mp3';
  }

  checkFileExist(nameFile) {
    let fs = cordova.file.externalRootDirectory;
    File.checkFile(fs, nameFile).then(
      _ => {
        return true;
      }
    ).catch(err => {
        return false;
      }
    );
  }

  getDrive() {
    gapi.client.load('drive', 'v2', () => {
          var request = gapi.client.request({
               path : 'https://www.googleapis.com/drive/v2/files?access_token=' + this.access_token,
               method : 'GET',
               params : {
                    projection: "FULL",
                    maxResults: 5
               }
          });
          request.execute(function(response) {
               alert(JSON.stringify(response));   
          });


     });
  }

  uploadDrive() {
    var callback;
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    File.readAsDataURL(cordova.file.externalRootDirectory,'badminton.mp3').then( res => {
      res = res.toString();
      let baseStr = ";base64,";
      var index = res.indexOf(';base64,')+ baseStr.length;
      res = res.substring(index);
       alert(res);

      var contentType = 'audio/mp3' || 'application/octet-stream';
      var metadata = {
        'title': 'badminton.mp3',
        'mimeType': contentType
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
                alert(file);
                alert('upload success');
              };
            }
            request.execute(callback);
        });

      })

  }
}

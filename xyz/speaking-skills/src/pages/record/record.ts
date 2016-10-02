import { Component, OnInit } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular'; 
import { RecordService } from '../../services/record.service';
import { WordService } from '../../services/word.service'
import { MediaPlugin } from 'ionic-native';
import { File } from 'ionic-native';
import { TextToSpeech } from 'ionic-native';

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
	words: Object[];
	records: Object[];
  private _fileRecord: MediaPlugin;
  private _pathFile: string;

  constructor(private navCtrl: NavController, private recordService: RecordService, private wordService: WordService, platform: Platform, private navParams: NavParams) {
    this.platform = platform;
    let categoryId = this.navParams.get('categoryId');
  
  	this.wordService.getWord(categoryId).then(res => {
      this.words = res;
      this.recordService.getRecords().then(res => {
        this.records = res;
        for (let i = 0; i < this.records.length;  i++) {
          for (let j = 0; j < this.words.length; j++) {
            if (this.records[i]['word_id'] == this.words[j]['id']) {
              this.words[j]['url'] = this.records[i]['url'];
              //on device
              if(!platform.is('cordova')) break;
              else {
                var nameFile = this.words[j]['content'] + '.mp3';
                 let fs = cordova.file.externalRootDirectory;
                  File.checkFile(fs, nameFile).then(
                    _ => {
                      this.words[j]['url'] = this.records[i]['url'];
                    }
                  ).catch(err => {
                      this.words[j]['url'] = null;
                    }
                  );
               
              }
              break;
              
            }
          }
        }
      });
    });

    
  }


  ngOnInit() {
      
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
    //link lưu file ở máy
    this._pathFile = this.getPathFile(word['content']);
    //khởi tạo đối tượng Media
    this._fileRecord = new MediaPlugin(this._pathFile);
    this._fileRecord.status.subscribe(()=>{});
    //bắt đầu ghi âm
    this._fileRecord.startRecord();
  }

  stopRecord(word: Object) {
    word['isRecording'] = false;
    if(!this.platform.is('cordova')) return;
    this._fileRecord.stopRecord();

    var record: Object = {};
    record['word_id'] = word['id'];
    record['url'] = this._pathFile;

    //Lưu vào mlab
    this.recordService.createRecord(record);
    word['url'] = this._pathFile;
  }

  playRecord(item){
    //let path = this.getPathFile(item['content']);
    let path = item['url'];
    if(!this.platform.is('cordova')) return;
    this._fileRecord = new MediaPlugin(path);
    this._fileRecord.status.subscribe(()=>{});
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


}

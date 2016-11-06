import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppGlobals } from '../../services/app-globals.service';
import { DriveService } from '../../services/drive.service';


/*
  Generated class for the Google page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-google',
  templateUrl: 'google.html',
  providers: [ DriveService ]
})
export class Google implements OnInit {
  idFolder: String;
  speakingFolder: Object = {};
  listFile: Object[] = [];
	auth2: any;
  childOfFolder: Object[] = [];
  recordAudio: Object[] = [];
  access_token: String;
  isLogin: boolean = false;

  constructor(public navCtrl: NavController, private ngZone: NgZone, 
    private appGlobals: AppGlobals, private driveService: DriveService) {
    
  }

  ngOnInit() {
    this.appGlobals.access_token.subscribe(value => {
      this.access_token = value;
      if(value != '') {
        this.isLogin = true;
      }

      this.driveService.getIdFolderSpeak(this.access_token).then(res => {
        this.idFolder = res;
        this.getSpeakingFolder();
      });
    });
  }


  getSpeakingFolder() {
      gapi.client.load('drive', 'v2', () => {
      var request = gapi.client.request({
           path : 'https://www.googleapis.com/drive/v2/files/'+ this.idFolder +'/children',
           method : 'GET'
      });
      request.execute((response) => {
        console.log(response.items);  
        for(var i = 0; i < response.items.length; i++) {
          this.childOfFolder.push(response.items[i]);
        } 
        //alert(this.childOfFolder);
      });

    });
  }


  getListRecord() {
    for( var i = 0; i < this.childOfFolder.length; i ++) {
       let tempId = this.childOfFolder[i]['id']
       gapi.client.load('drive', 'v2', () => {
        var request = gapi.client.request({
             path : 'https://www.googleapis.com/drive/v2/files/'+ tempId,
             method : 'GET'
        });
        request.execute((response) => {
             alert(JSON.stringify(response));  
             this.ngZone.run(() => {
               this.recordAudio.push(response);
             })   
        });

      });

    }
  }

  playAudio(url) {
    var audio = new Audio();
    audio.src = url;
    audio.load();
    audio.play();
  }

  insertFile() {
    if(this.idFolder == null) {
      console.log('chưa có folder');
      return;
    }
    var callback;
    var fileData = document.getElementById('files')['files'][0];
    console.log('fileData' + JSON.stringify(fileData));
    var fileName = document.getElementById('files')['value'].match(/[^\/\\]+$/);
    console.log('ten file' + fileName);
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    var reader = new FileReader();
    reader.readAsBinaryString(fileData);
    reader.onload = (e) => {
      console.log(fileData.type);
      console.log('idFolder'+ this.idFolder);
      var contentType = fileData.type || 'application/octet-stream';
      var metadata = {
        'title': fileName,
        'mimeType': contentType,
        'parents':[{"id":this.idFolder}]
      };

      var base64Data = btoa(reader.result);
      console.log(base64Data);
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

      var request = gapi.client.request({
          'path': '/upload/drive/v2/files?access_token=' + this.access_token,
          //'path': 'https://www.googleapis.com/drive/v2/files/'+ this.idFolder + '/children',
          'method': 'POST',
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody
        });
      if (!callback) {
        callback = function(file) {
          console.log(file);
          alert('upload success');
        };
      }
      request.execute(callback);
    }
  }

  ionViewDidLoad() {
    console.log('Hello Google Page');
  }

}

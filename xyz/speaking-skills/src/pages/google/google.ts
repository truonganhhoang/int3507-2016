import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Google page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-google',
  templateUrl: 'google.html'
})
export class Google {
  listFile: Object[] = [];
	auth2: any;

  constructor(public navCtrl: NavController) {
  
  }

  list(){
    gapi.client.load('drive', 'v2', () => {
      var request = gapi.client.request({
           path : 'https://www.googleapis.com/drive/v2/files',
           method : 'GET',
           params : {
                projection: "FULL",
                maxResults: 1000
           }
      });
      request.execute((response) => {
            //console.log(response.items);  
        for(var i = 0; i < response.items.length; i++) {
         //console.log(response.items[i].mimeType);
          if(response.items[i].mimeType == 'application/vnd.google-apps.folder') {
             this.listFile.push(response.items[i]);
          }
        } 
        console.log(this.listFile);
      });


    });
  }

  insertFile() {
    var callback;
    var fileData = document.getElementById('files')['files'][0];
    var fileName = document.getElementById('files')['value'].match(/[^\/\\]+$/);
    console.log('ten file' + fileName);
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";

    var reader = new FileReader();
    reader.readAsBinaryString(fileData);
    reader.onload = function(e) {
      console.log(fileData.type);
      var contentType = fileData.type || 'application/octet-stream';
      var metadata = {
        'title': fileName,
        'mimeType': contentType
      };

      var base64Data = btoa(reader.result);
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
          'path': '/upload/drive/v2/files',
          'method': 'POST',
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody});
      if (!callback) {
        callback = function(file) {
          console.log(file)
        };
      }
      request.execute(callback);
    }
  }

  ionViewDidLoad() {
    console.log('Hello Google Page');
  }

}

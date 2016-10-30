import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DriveService { 

  constructor(private http: Http) { }

  createNewFolder(token) {
    var data = {
      "title": "Speaking",
      "mimeType": "application/vnd.google-apps.folder"
    }

    gapi.client.load('drive', 'v2', function() {
      var request = gapi.client.request({
        'path': '/drive/v2/files?access_token=' + token,
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json'
        },
        'body': data
      });

      request.execute(function(response) {
        //alert(JSON.stringify(response));   
      });
    });
  }

  // nếu có thì trả về true, không có thì trả về false
  checkFolderExist(token): Promise<boolean>{
    return new Promise(resolve => {
      gapi.client.load('drive', 'v2', () => {
        var request = gapi.client.request({
          path : 'https://www.googleapis.com/drive/v2/files?access_token=' + token,
          method : 'GET',
          params : {
            q: "title = 'Speaking' and trashed = false"
          }
        });

        request.execute((response) => {
          if(response.items.length == 0 ) { 
            console.log('chưa có folder');
            resolve(false);
          } else {
            for(var i = 0; i < response.items.length; i++) {
              if (response.items[i].title == 'Speaking') {
                console.log(response.items[i].id);
              }
            } 
            console.log('đã có folder');
            resolve(true);
          }
         
        });
      });
    });

  }

  getIdFolderSpeak(access_token): Promise<string>{
    return new Promise(resolve => {

      gapi.client.load('drive', 'v2', () => {
        var request = gapi.client.request({
          path : 'https://www.googleapis.com/drive/v2/files?access_token=' + access_token,
          method : 'GET',
          params : {
            q: "title = 'Speaking' and trashed = false"
          }
        });

        request.execute((response) => {
          if(response.items.length == 0 ) { 
            //alert('chưa có folder');
            resolve('');
          } else {
            for(var i = 0; i < response.items.length; i++) {
              if (response.items[i].title == 'Speaking') {
                resolve(response.items[i].id);
                break;
              }
            } 
          }
        });
      });
    })
    
  }
}

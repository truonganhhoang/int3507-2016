import { Component, OnInit } from '@angular/core';
import { GooglePlus } from 'ionic-native';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


/*
  Generated class for the Login component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class Login implements OnInit {

  profile: Object;

  constructor(private http: Http) {
    
    console.log('Hello Login Component');
  }

  ngOnInit() {
    //this.loginSilent();
  }

  login() {
    GooglePlus.login({
      'scopes': 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    }).then(res => {
      this.profile = res;
      alert(res.serverAuthCode);
      // alert('token' + res.oauthToken);
      // var data = {
      //           client_id: '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com',
      //           client_secret: 'DXCJ-YeBLOcuY49Hq1OsbUmi',
      //           grant_type: 'authorization_code',
      //           code: res.serverAuthCode
      //       };

      //  var body = 'client_id=' + data.client_id +
      //              '&client_secret=' + data.client_secret +
      //              '&grant_type=' + data.grant_type +
      //              '&code=' + data.code;

      //   let headers = new Headers();
      //   headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');

      //   this.http.post('https://www.googleapis.com/oauth2/v3/token', body, headers)
      //   .subscribe(res => {
      //     alert('succes'+res.json());
      //   },
      //   err => {
      //     alert('erro'+err.json());
      //   });


        // let test = 'ya29.CjV2A0MFYoZmXdiZKJ5c2ljyNgYzkj61PHdq9KzkUGiwDh-8-m8G-yASwj7OPHRZa7suqVR1Yg'
        //  gapi.client.load('drive', 'v2', function() {
        //   var request = gapi.client.request({
        //        path : 'https://www.googleapis.com/drive/v2/files?access_token='+test,
        //        method : 'GET',
        //        params : {
        //             projection: "FULL",
        //             maxResults: 5
        //        }
        //   });
        //   request.execute(function(response) {
        //        alert(JSON.stringify(response));   
        //   });


        //  });

    },
    err => {
      alert(err);
    })
  }

  loginSilent() {
    GooglePlus.trySilentLogin({
      'scopes': 'https://www.googleapis.com/auth/drive', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    }).then(res => {
      this.profile = res;

    },
    err => {
      alert(err);
    })
  }


  logout() {
    GooglePlus.logout().then(res => {
      alert(res);
    })
  }

  disconnect() {
    GooglePlus.disconnect().then(res => {
      alert(res);
    })
  }


}

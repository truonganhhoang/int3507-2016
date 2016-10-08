import { Component, OnInit } from '@angular/core';
import { GooglePlus } from 'ionic-native';

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

  constructor() {
    
    console.log('Hello Login Component');
  }

  ngOnInit() {
    //this.loginSilent();
  }

  login() {
    GooglePlus.login({
      'scopes': 'https://www.googleapis.com/auth/drive', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    }).then(res => {
      this.profile = res;
      alert(JSON.stringify(res));
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
      alert(JSON.stringify(res));
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

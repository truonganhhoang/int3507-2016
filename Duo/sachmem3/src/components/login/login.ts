import { Component } from '@angular/core';
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
export class Login {

  profile: Object;

  constructor() {
  }

  login() {
    GooglePlus.login({
      'scopes': 'profile', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '1029342345664-8vt4o6il1unl0g0ef348suhcgmt6pt5f.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    }).then(res => {
      this.profile = res;
    },
    err => {
      alert(err);
    })
  }

  loginSilent() {
    GooglePlus.trySilentLogin({
      'scopes': 'profile', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '1029342345664-8vt4o6il1unl0g0ef348suhcgmt6pt5f.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
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

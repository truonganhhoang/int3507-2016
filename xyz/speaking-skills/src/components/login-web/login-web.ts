import { Component, NgZone, OnInit, AfterViewChecked } from '@angular/core';

/*
  Generated class for the LoginWeb component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'login-web',
  templateUrl: 'login-web.html'
})
export class LoginWeb implements OnInit, AfterViewChecked {
  isLogin: boolean = false;
  profile: Object = {};
  auth2: any;
  isLogout: boolean = false;

  constructor( private zone: NgZone) {
  }
  
  ngOnInit() {
    this.start();
  }

  start() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive'
      });

      this.auth2.then(() => {
        var isSignedIn = this.auth2.isSignedIn.get();
        var googleUser = this.auth2.currentUser.get();
          if (isSignedIn) {
            this.isLogin = true;
            var res =  googleUser.getBasicProfile();
            this.profile['displayName'] = res.getName();
            this.profile['imageUrl'] = res.getImageUrl();
            // User is signed in.
            // Pass currentUser to onSignIn callback.
          } else {
            console.log('not login');
             // User is not signed in.
            // call auth2.attachClickHandler
            this.attachSignin(document.getElementById('customBtn'));
          }
      });

    });
  };

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        console.log(googleUser.getAuthResponse());
        
         this.zone.run(() => {
          this.isLogin = true;
          this.isLogout = false;
          var res =  googleUser.getBasicProfile();
          this.profile['displayName'] = res.getName();
          this.profile['imageUrl'] = res.getImageUrl();
        });
      },(error) => {
        alert(JSON.stringify(error, undefined, 2));
    });
  }

  ngAfterViewChecked() {
    if(this.isLogout == true) this.attachSignin(document.getElementById('customBtn'));
  }

  signOut() {
    this.auth2 = gapi.auth2.getAuthInstance();
    
    this.auth2.signOut().then(() => {
      console.log('User signed out.');
      this.zone.run(() => {
        this.isLogin = false;
        this.isLogout = true;
        this.profile = {};
      })
    });
  }
  
  ionViewDidLoad() {
    console.log('Hello Google Page');
  }
}

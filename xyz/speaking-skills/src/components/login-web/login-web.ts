import { Component, NgZone } from '@angular/core';

/*
  Generated class for the LoginWeb component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'login-web',
  templateUrl: 'login-web.html'
})
export class LoginWeb {
  isLogin: boolean = false;
  profile: Object = {};
  auth2: any;

  constructor( private zone: NgZone) {
  }
  
  start() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
       this.auth2 = gapi.auth2.init({
        client_id: '736288713251-26srbi81jha5n1aithe4av668oh5pn12.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive'
        
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });

       console.log(gapi.auth2.getAuthInstance());

      this.attachSignin(document.getElementById('customBtn'));
    });
  };

  attachSignin(element) {
    console.log(element.id);
    this.auth2.attachClickHandler(element, {},
        (googleUser) => {
         console.log(googleUser.getAuthResponse());
        
         this.zone.run(() => {
           this.isLogin = true;
          var res =  googleUser.getBasicProfile();
          this.profile['displayName'] = res.getName();
          this.profile['imageUrl'] = res.getImageUrl();
        });
         // alert('is sign in'+ this.auth2.isSignedIn.get());
        },(error) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

  ngAfterViewInit() {
    this.start();
  }


  signOut() {
    this.auth2 = gapi.auth2.getAuthInstance();
    
    this.auth2.signOut().then(() => {
      console.log('User signed out.');
      this.zone.run(() => {
        this.isLogin = false;
        this.profile = {};
      })
    });

  }

  list(){
   gapi.client.load('drive', 'v2', function() {
          var request = gapi.client.request({
               path : 'https://www.googleapis.com/drive/v2/files',
               method : 'GET',
               params : {
                    projection: "FULL",
                    maxResults: 5
               }
          });
          request.execute(function(response) {
               console.log(response);   
          });


     });
  }
  
  ionViewDidLoad() {
    console.log('Hello Google Page');
  }


}

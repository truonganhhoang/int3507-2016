import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Category } from '../pages/category/category';
import { Youtube } from '../pages/youtube/youtube';
<<<<<<< HEAD
import { Sing } from '../pages/sing/sing';
=======
import { Google } from '../pages/google/google'
>>>>>>> 15e38cbc00e5c656e01c1b4fb99afb040da9b148


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Youtube;
  onDevice: boolean = false;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.platform = platform;
    this.onDevice = this.platform.is('cordova');
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Speaking by category', component: Category },
      { title: 'Speaking with youtube', component: Youtube },
<<<<<<< HEAD
      { title: "Let's sing", component: Sing }
=======
      { title: 'Test Google Drive', component: Google }
>>>>>>> 15e38cbc00e5c656e01c1b4fb99afb040da9b148
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

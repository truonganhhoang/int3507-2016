import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { Category } from '../pages/category/category';
// import { Youtube } from '../pages/youtube/youtube';
import { Google } from '../pages/google/google'
import { Sing } from '../pages/sing/sing';
import { MySong } from '../pages/my-song/my-song';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Sing;
  onDevice: boolean = false;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform) {
    this.platform = platform;
    this.onDevice = this.platform.is('cordova');
    this.initializeApp();

    // used for an example of ngFor and navigation
    if (this.onDevice) {
      this.pages = [
        { title: 'Category', icon: 'keypad', component: Category },
        { title: 'Sing a Song', icon: 'microphone', component: Sing },
        { title: 'My Song', icon: 'musical-notes', component: MySong }
      ];
    }else {
      this.pages = [
        { title: 'Category', icon: 'keypad', component: Category },
        { title: 'Sing a Song', icon: 'microphone', component: Sing },
        // { title: 'Youtube', component: Youtube },
        { title: 'My Drive', icon: 'folder', component: Google },
        { title: 'My Song', icon: 'musical-notes', component: MySong }
      ];
    }
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

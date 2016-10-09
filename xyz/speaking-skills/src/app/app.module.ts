import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Record } from '../pages/record/record';
import { Category } from '../pages/category/category';
import { Youtube } from '../pages/youtube/youtube';
import { VideoPlayer } from '../pages/video-player/video-player';
import { Login } from '../components/login/login';
import { LoginWeb } from '../components/login-web/login-web';
import { Google } from '../pages/google/google'



@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Record,
    Category,
    Youtube,
    VideoPlayer, 
    Login,
    LoginWeb,
    Google
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Record,
    Category,
    Youtube,
    VideoPlayer,
    Google
  ],
  providers: []
})
export class AppModule {}

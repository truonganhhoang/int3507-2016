import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import 'rxjs/Rx';

import { MyApp } from './app.component';
import { Record } from '../pages/record/record';
import { Category } from '../pages/category/category';
import { Sing } from '../pages/sing/sing';
import { VideoPlayer } from '../pages/video-player/video-player';
import { Login } from '../components/login/login';
import { LoginWeb } from '../components/login-web/login-web';
import { Google } from '../pages/google/google';
import { MySong } from '../pages/my-song/my-song';
import { AppGlobals } from '../services/app-globals.service';


@NgModule({
  declarations: [
    MyApp,
    Record,
    Category,
    VideoPlayer, 
    Login,
    LoginWeb,
    Sing,
    MySong,
   Google
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Record,
    Category,
    VideoPlayer,
    Google,
    Sing,
    MySong
  ],
  providers: [ AppGlobals ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import 'rxjs/Rx';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Record } from '../pages/record/record';
import { Category } from '../pages/category/category';
import { Youtube } from '../pages/youtube/youtube';
import { VideoPlayer } from '../pages/video-player/video-player';
<<<<<<< HEAD
import { Sing } from '../pages/sing/sing';
=======
import { Login } from '../components/login/login';
import { LoginWeb } from '../components/login-web/login-web';
import { Google } from '../pages/google/google'
>>>>>>> 15e38cbc00e5c656e01c1b4fb99afb040da9b148



@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Record,
    Category,
    Youtube,
<<<<<<< HEAD
    VideoPlayer,
    Sing
=======
    VideoPlayer, 
    Login,
    LoginWeb,
    Google
>>>>>>> 15e38cbc00e5c656e01c1b4fb99afb040da9b148
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
<<<<<<< HEAD
    Sing
=======
    Google
>>>>>>> 15e38cbc00e5c656e01c1b4fb99afb040da9b148
  ],
  providers: []
})
export class AppModule {}

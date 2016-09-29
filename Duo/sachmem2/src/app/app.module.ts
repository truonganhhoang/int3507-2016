import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { BookPage } from '../pages/book/book';
import { UnitPage } from '../pages/unit/unit';
import { TrainingPage } from '../pages/training/training';
import { FightingPage } from '../pages/fighting/fighting';
import { SpeakingPage } from '../pages/speaking/speaking';
import { ReadingPage } from '../pages/reading/reading';
import { ListeningPage } from '../pages/listening/listening';
import { WritingPage } from '../pages/writing/writing';




@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    BookPage,
    UnitPage,
    FightingPage,
    TrainingPage,
    SpeakingPage,
    ReadingPage,
    ListeningPage,
    WritingPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2, 
    BookPage,
    UnitPage,
    FightingPage,
    TrainingPage,
    SpeakingPage,
    ReadingPage,
    ListeningPage,
    WritingPage
  ],
  providers: []
})
export class AppModule {}

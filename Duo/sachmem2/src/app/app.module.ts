import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { BookPage } from '../pages/book/book';
import { UnitPage } from '../pages/unit/unit';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    BookPage,
    UnitPage
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
    UnitPage
  ],
  providers: []
})
export class AppModule {}

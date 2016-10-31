import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { CarouselModule} from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { BookDetailComponent } from './components/book/book-detail.component';
import { CarouselComponent} from './components/carousel/carousel.component';
import { ChooseComponent }    from './components/tests/chooseAnswer/choose.component';
import { TestComponent }    from './components/tests/test.component';

import { BookService } from './components/book/book.service';
import { BookDetailService } from './components/book/book-detail.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    CarouselComponent,
    ChooseComponent,
    TestComponent
  ],
  providers: [
    BookService,
    BookDetailService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
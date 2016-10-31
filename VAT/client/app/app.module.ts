import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { AppComponent }   from './app.component';
import  {VocabularyComponent} from './components/vocabulary/vocabulary.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ AppComponent, VocabularyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

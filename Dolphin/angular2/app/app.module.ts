import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {QuestionChildComponent} from './question-child.component';
import {QuestionParentComponent} from './question-parent.component';

let directives: any[] = [
    AppComponent,
   	QuestionChildComponent,
   	QuestionParentComponent
  ];

let schemas: any[] = [];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    QuestionParentComponent,
    QuestionChildComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

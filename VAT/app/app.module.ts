import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { AboutComponent } from "./components/about/about.component";
import { routing } from "./routes";
import { HomeComponent } from "./components/home/home.component";
import { ListeningComponent} from './components/listening/listening.component';
import { ReadingComponent} from './components/reading/reading.component';
import {SpeakingComponent} from './components/speaking/speaking.component';
import {WritingComponent} from './components/writing/writing.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        ListeningComponent,
        ReadingComponent,
        SpeakingComponent,
        WritingComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {ListeningComponent} from './components/listening/listening.component';
import {ReadingComponent} from './components/reading/reading.component';
import {SpeakingComponent} from './components/speaking/speaking.component';
import {WritingComponent} from './components/writing/writing.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'listening', component: ListeningComponent},
    { path: 'listening/:id', component: ListeningComponent},
    { path: 'reading', component: ReadingComponent},
    { path: 'reading/:id', component: ReadingComponent},
    { path: 'reading/advanced/:id', component: ReadingComponent},
    { path: 'speaking', component: SpeakingComponent},
    { path: 'writing', component: WritingComponent},
    { path: 'writing/:id', component: WritingComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: false });

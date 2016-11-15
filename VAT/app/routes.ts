import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {ListeningComponent} from './components/listening/listening.component';
import {ReadingComponent} from './components/reading/reading.component';

export const routes: Route[] = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'listening', component: ListeningComponent},
    { path: 'reading', component: ReadingComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: false });

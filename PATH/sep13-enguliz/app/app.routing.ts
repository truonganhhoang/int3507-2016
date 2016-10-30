import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {TheoryListenComponent} from "./theory/listen.component";
import {TheoryComponent} from "./theory/theory.component";
import {TestComponent} from "./test/test.component";
import {TestReadCompoent} from "./test/read/test.component";
import {DetailComponent} from "./detail/detail.component";
import {RegisterComponent} from "./login/register.component";
import {ProfileComponent} from "./profile/profile.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'theory', component: TheoryComponent,
        children: [
                { path: '', redirectTo: 'listen', pathMatch: 'full'},
                { path: 'listen', component: TheoryListenComponent}
            ]
    },
    { path: 'test', component: TestComponent, children: [
            { path: 'read', component: TestReadCompoent }
        ]
    },
    { path: 'details/:id', component: DetailComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
];

export const appRoutingProvider: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
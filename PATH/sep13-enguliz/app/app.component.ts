/**
 * Created by Thinking on 09/13/2016.
 */

import {Component, OnInit} from "@angular/core";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";
@Component({
    selector: 'my-app',
    template: `<header class="navbar navbar-default">
                    <div class="container-fluid">
                        <nav>
                            <div class="header-logo">
                                <img src="../../images/learnenglish.png" alt="">
                            </div>
                            <ul class="nav navbar-nav navbar-right" *ngIf="loggedIn === false">
                                <li><a href="">Home</a></li>
                                <li><a href="">Listening</a></li>
                                <li><a href="">Reading</a></li>
                                <li><a href="">Writing</a></li>
                                <li><a [routerLink]="['login']">Login</a></li>
                                <li><a href="#" class="sign-up">Sign up</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right" *ngIf="loggedIn === true">
                                <li><a href="">Home</a></li>
                                <li><a href="">Listening</a></li>
                                <li><a href="">Reading</a></li>
                                <li><a href="">Writing</a></li>
                                <li>
                                    <a href="" class="dropdown-toggle" data-toggle="dropdown"> {{email}}</a>
                                </li>
                                <li><a href="" (click)="logout()">Logout</a></li>
                            </ul>
                        </nav>
                    </div>
               <div class="slider row"></div>
        <router-outlet></router-outlet>`,
    providers: [UserService]
})

export class AppComponent implements OnInit {
    private loggedIn = false;
    public user:User;
    public email = '';


    constructor(private service:UserService) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    loadUserProfile() {
        let auth_token = localStorage.getItem('auth_token');
        this.service.getProfile(auth_token).subscribe(
            data => {
                this.user = data;
                this.email = this.user.userName;
                console.log(this.email);
            },
            err => {
                console.log(err);
            }
        )
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    logout() {
        this.service.logout(localStorage.getItem('auth_token'));
        localStorage.removeItem('auth_token');
    }

    ngOnInit() {
        if (this.isLoggedIn()) {
            this.loadUserProfile();
        }
    }
}
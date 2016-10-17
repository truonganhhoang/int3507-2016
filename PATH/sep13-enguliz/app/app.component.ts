/**
 * Created by Thinking on 09/13/2016.
 */

import {Component, OnInit} from "@angular/core";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";
@Component({
    selector: 'my-app',
    template: `<div class="header navbar navbar-inverse" style="margin-left: 0;"  data-spy="affix" data-offset-top="0" >
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <div class="search">
                            <form action="#">
                                <input type="text" placeholder="Search" style="border: none">
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <ul *ngIf="loggedIn === false">
                            <li><a [routerLink]="['login']">Login</a></li>
                            <li><a href="#" class="sign-up">Sign up</a></li>
                        </ul>
                        <ul *ngIf="loggedIn === true">
                            <li>Tài khoản: <a href=""> {{email}}</a></li>
                            <li><a href="" (click)="logout()">Logout</a></li>
                        </ul>
                    </div>
               </div>
               <div class="slider row">
               
               </div>
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
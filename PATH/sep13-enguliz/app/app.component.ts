/**
 * Created by Thinking on 09/13/2016.
 */

import {Component, OnInit} from "@angular/core";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";
@Component({
    selector: 'my-app',
    template: `
        <header class="row" data-spy="affix" data-offset-top="0">
                    <div class="left col-sm-7">
                        <ul>
                            <li><a href=""><img src="../images/logo.jpeg" width="200px" height="45px" class="logo"></a></li>
                            <li><a href="">HOME</a></li>
                            <li><a href="">READING</a></li>
                            <li><a href="">LISTENING</a></li>
                            <li><a href="">GRAMMAR</a></li>
                        </ul>
                    </div>
                    
                    <div class="right col-sm-5">
                       <ul>
                            <li>
                                <div class="search">
                                    <form action="">
                                        <input type="text" name="search_text" class="search_text" placeholder="Search..." id="search-box">
                                        <input type="submit" name="search_button" class="btn search_button" role="button">
                                    </form>
                                </div>
                            </li>
                            <li><a [routerLink]="['login']">LOGIN</a></li>
                            <li><a href="" class="sign-up">SIGN IN</a></li> 
                       </ul>
                    </div>
                    </header>
        
                        <!--<nav>-->
                            <!--<div class="header-logo">-->
                                <!--<img src="../../images/logo.jpeg" alt="">-->
                            <!--</div>-->
                            <!--<ul class="nav navbar-nav navbar-right" *ngIf="loggedIn === false">-->
                                <!--<li><a href="">Home</a></li>-->
                                <!--<li><a href="">Listening</a></li>-->
                                <!--<li><a href="">Reading</a></li>-->
                                <!--<li><a href="">Writing</a></li>-->
                                <!--<li><a [routerLink]="['login']">Login</a></li>-->
                                <!--<li><a href="#" class="sign-up">Sign up</a></li>-->
                            <!--</ul>-->
                            <!--<ul class="nav navbar-nav navbar-right" *ngIf="loggedIn === true">-->
                                <!--<li><a href="">Home</a></li>-->
                                <!--<li><a href="">Listening</a></li>-->
                                <!--<li><a href="">Reading</a></li>-->
                                <!--<li><a href="">Writing</a></li>-->
                                <!--<li>-->
                                    <!--<a href="" class="dropdown-toggle" data-toggle="dropdown"> {{email}}</a>-->
                                <!--</li>-->
                                <!--<li><a href="" (click)="logout()">Logout</a></li>-->
                            <!--</ul>-->
                        <!--</nav>-->
               <!--<div class="slider row"></div>-->
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
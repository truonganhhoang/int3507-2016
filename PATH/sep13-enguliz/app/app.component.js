/**
 * Created by Thinking on 09/13/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const user_service_1 = require("./user/user.service");
let AppComponent = class AppComponent {
    constructor(service) {
        this.service = service;
        this.loggedIn = false;
        this.email = '';
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    loadUserProfile() {
        let auth_token = localStorage.getItem('auth_token');
        this.service.getProfile(auth_token).subscribe(data => {
            this.user = data;
            this.email = this.user.userName;
            console.log(this.email);
        }, err => {
            console.log(err);
        });
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
};
AppComponent = __decorate([
    core_1.Component({
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
        providers: [user_service_1.UserService]
    }), 
    __metadata('design:paramtypes', [user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
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
var core_1 = require("@angular/core");
var user_service_1 = require("./user/user.service");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.loggedIn = false;
        this.email = '';
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    AppComponent.prototype.loadUserProfile = function () {
        var _this = this;
        var auth_token = localStorage.getItem('auth_token');
        this.service.getProfile(auth_token).subscribe(function (data) {
            _this.user = data;
            _this.email = _this.user.userName;
            console.log(_this.email);
        }, function (err) {
            console.log(err);
        });
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    AppComponent.prototype.logout = function () {
        this.service.logout(localStorage.getItem('auth_token'));
        localStorage.removeItem('auth_token');
    };
    AppComponent.prototype.ngOnInit = function () {
        if (this.isLoggedIn()) {
            this.loadUserProfile();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <header class=\"row\" data-spy=\"affix\" data-offset-top=\"0\">\n            <div class=\"container\">\n                    <div class=\"pull-left\">\n                        <ul class=\"navbar-left\">\n                            <li class=\"item\"><a href=\"\"><img src=\"../images/logo.jpeg\" width=\"200px\" height=\"45px\" class=\"logo\"></a></li>\n                            <li class=\"item\"><a href=\"\">HOME</a></li>\n                            <li class=\"item\"><a href=\"\">READING</a></li>\n                            <li class=\"item\"><a href=\"\">LISTENING</a></li>\n                            <li class=\"item\"><a [routerLink]=\"['grammar']\">GRAMMAR</a></li>\n                        </ul>\n                    </div>\n                    \n                    <div class=\"pull-right\">\n                       <ul class=\"navbar-right\">\n                            <li><a [routerLink]=\"['login']\">SIGN IN</a></li>\n                            <li><a [routerLink]=\"['register']\" class=\"sign-up\">SIGN UP</a></li> \n                       </ul>\n                    </div>\n            </div>\n        </header>     \n        <router-outlet></router-outlet>",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
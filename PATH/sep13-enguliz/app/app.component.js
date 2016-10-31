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
        this.fullName = '';
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    AppComponent.prototype.loadUserProfile = function () {
        var _this = this;
        var auth_token = localStorage.getItem('auth_token');
        this.service.getProfile(auth_token).subscribe(function (data) {
            _this.user = data;
            _this.email = _this.user.userName;
            _this.fullName = _this.user.userFullName;
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
            template: "\n        <section id=\"head\">\n\t\t<div id=\"mySidenav\" class=\"sidenav\">\n\t\t  <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;</a>\n\t\t  <div class=\"row fix-menu\">\n\t\t  \t<div class=\"fix-col col-xs-12\">\n\t\t\t\t<ul class=\"multi-column-dropdown\">\n\t\t            <li><a href=\"#\">Listening</a></li>\n\t\t            <li class=\"divider\"></li>\n\t\t            <li><a href=\"#\">Reading</a></li>\n\t\t            <li class=\"divider\"></li>\n\t\t            <li><a href=\"#\">Grammar</a></li>\n\t            </ul>\n\t\t\t</div>\n\t\t  </div>\n\t\t  \t  \n\t\t</div>\n\t\t<div id=\"mySidenav\" style=\"background-color: #27A8E6;\" class=\"mobile-only\">\t\t\n\t\t\t<nav class=\"navbar navbar-inverse\" role=\"navigation\">\t\t\n\t\t\t    <div class=\"navbar-header\">\n\t\t\t    <div class=\"fix-icon\"><span onclick=\"openNav()\">&#9776;</span></div>\n\t\t\t    <a class=\"navbar-brand viademy-logo\" [routerLink]=\"['']\">\n\t                Enguliz\n\t            </a>\t\t\t   \n\t\t\t    </div>\n\t\t\t    \n\t\t\t</nav>\n\t\t</div>\n\t\t<nav class=\"navbar navbar-inverse hidden-xs\">\n\t\t\t<div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t<a class=\"navbar-brand viademy-logo\" [routerLink]=\"['']\">\n\t\t\t\t\t\tEnguliz\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t<!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"main-menu-categories\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown active\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            Danh m\u1EE5c \n            <span class=\"caret\"></span></a>\n          \t<ul class=\"dropdown-menu multi-column columns-1\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <ul class=\"multi-column-dropdown\">\n                            <li><a href=\"#\">Listening</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Reading</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a href=\"#\">Grammar</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </ul>\n    \t</li>\n\t</ul>\n\t<form class=\"navbar-form navbar-left\">\n\t    <div class=\"form-group\" id=\"main-menu-course-search-box\">\n\t        <i id=\"main-menu-search-icon\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t      <input type=\"text\" id=\"main-menu-course-search\" class=\"form-control\" placeholder=\"T\u00ECm \u0111\u1EC1 t\u00E0i\">\n\t    </div>    \n\t</form>\n\t<ul class=\"nav navbar-nav navbar-right hidden-sm\" *ngIf=\"isLoggedIn() == false\">\n\t    <li><a [routerLink]=\"['register']\"><div id=\"main-menu-register\">\u0110\u0103ng k\u00FD</div></a></li>\n\t    <li><a [routerLink]=\"['login']\">\u0110\u0103ng nh\u1EADp</a></li>\n\t</ul>\n\t<ul class=\"nav navbar-nav navbar-right hidden-sm\" *ngIf=\"isLoggedIn() == true\">\n\t    <li><a [routerLink]=\"['profile']\"><div id=\"main-menu-register\">{{fullName}}</div></a></li>\n\t    <li><a [routerLink]=\"['login']\">\u0110\u0103ng nh\u1EADp</a></li>\n\t</ul>\n\t</div><!-- /.navbar-collapse -->\n</div><!-- /.container-fluid -->\n</nav>\n\t</section>      \n        <router-outlet></router-outlet>",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
/**
 * Created by Thinking on 09/15/2016.
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
var home_service_1 = require("./home.service");
var HomeComponent = (function () {
    function HomeComponent(service) {
        this.service = service;
        this.loggedIn = false;
        this.auth_token = '';
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    HomeComponent.prototype.loadHomeDatas = function () {
        var _this = this;
        this.service.getHomeData()
            .subscribe(function (body) { return _this.categories = body; }, function (err) {
            console.error(err);
        });
    };
    HomeComponent.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    HomeComponent.prototype.ngOnInit = function () {
        if (this.isLoggedIn()) {
            this.auth_token = localStorage.getItem('auth_token');
        }
        this.loadHomeDatas();
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/home.component.html',
            providers: [home_service_1.HomeService]
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
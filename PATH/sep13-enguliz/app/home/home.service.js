/**
 * Created by Thinking on 09/24/2016.
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
var http_1 = require("@angular/http");
var appSettings_1 = require("../appSettings");
var Rx_1 = require("rxjs/Rx");
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.homeUrl = appSettings_1.AppSettings.API_ENDPOINT + "/home";
        this.userProfileUrl = appSettings_1.AppSettings.API_ENDPOINT + "/user/profile";
        this.logoutUrl = appSettings_1.AppSettings.API_ENDPOINT + "/user/logout";
    }
    HomeService.prototype.getHomeData = function () {
        return this.http.get(this.homeUrl)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HomeService.prototype.getProfile = function (token) {
        var headers = new http_1.Headers({ 'access_token': token });
        return this.http.get(this.userProfileUrl, { headers: headers })
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HomeService.prototype.logout = function (token) {
        var headers = new http_1.Headers({ 'access_token': token });
        return this.http.get(this.logoutUrl, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map
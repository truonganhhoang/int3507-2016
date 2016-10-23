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
const http_1 = require("@angular/http");
const appSettings_1 = require("../appSettings");
const Rx_1 = require("rxjs/Rx");
const core_1 = require("@angular/core");
/**
 * Created by Thinking on 10/01/2016.
 */
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.userProfileUrl = `${appSettings_1.AppSettings.API_ENDPOINT}/user/profile`;
        this.logoutUrl = `${appSettings_1.AppSettings.API_ENDPOINT}/user/logout`;
    }
    getProfile(token) {
        let headers = new http_1.Headers({ 'access_token': token });
        return this.http.get(this.userProfileUrl, { headers: headers })
            .map((res) => res.json().data)
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
    logout(token) {
        let headers = new http_1.Headers({ 'access_token': token });
        return this.http.get(this.logoutUrl, { headers: headers })
            .map((res) => res.json())
            .catch((error) => Rx_1.Observable.throw(error.json().error || 'Server error'));
    }
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
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
/**
 * Created by Thinking on 10/29/2016.
 */
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this.registerUrl = ("" + appSettings_1.AppSettings.API_ENDPOINT) + "/user/register?";
    }
    RegisterService.prototype.registerRequest = function (username, password, phone, fullName) {
        return this.http.get(this.registerUrl
            + "username=" + username
            + "&password=" + password
            + "&phone=" + phone
            + "&fullName=" + fullName)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    RegisterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map
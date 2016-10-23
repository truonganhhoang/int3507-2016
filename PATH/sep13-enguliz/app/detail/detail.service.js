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
/**
 * Created by Thinking on 09/26/2016.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var appSettings_1 = require("../appSettings");
var Rx_1 = require("rxjs/Rx");
var DetailService = (function () {
    function DetailService(http) {
        this.http = http;
        this.detailsUrl = ("" + appSettings_1.AppSettings.API_ENDPOINT) + "/details";
    }
    DetailService.prototype.getDetailsData = function (id) {
        return this.http.get(this.detailsUrl + "/" + id)
            .map(function (res) { return res.json().data; })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    DetailService.prototype.submitAns = function (token, id, body) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'access_token': token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.detailsUrl + "/" + id + "/submit", body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    DetailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DetailService);
    return DetailService;
}());
exports.DetailService = DetailService;
//# sourceMappingURL=detail.service.js.map
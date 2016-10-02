var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
export var WordService = (function () {
    function WordService(http) {
        this.http = http;
    }
    WordService.prototype.getWord = function (name) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://xyz-server.herokuapp.com/api/category/' + name).subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    WordService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], WordService);
    return WordService;
}());

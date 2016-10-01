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
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
export var RecordService = (function () {
    function RecordService(http) {
        this.http = http;
    }
    RecordService.prototype.getWords = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://xyz-server.herokuapp.com/api/words').subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    RecordService.prototype.getRecords = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://xyz-server.herokuapp.com/api/records').subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    RecordService.prototype.createRecord = function (record) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('https://xyz-server.herokuapp.com/api/records', JSON.stringify(record), { headers: headers })
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    RecordService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], RecordService);
    return RecordService;
}());

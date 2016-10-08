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
    RecordService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RecordService.ctorParameters = [
        { type: Http, },
    ];
    return RecordService;
}());

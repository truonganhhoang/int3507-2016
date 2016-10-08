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
    WordService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WordService.ctorParameters = [
        { type: Http, },
    ];
    return WordService;
}());

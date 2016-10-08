import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
export var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getCategory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('https://xyz-server.herokuapp.com/api/category').subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    CategoryService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CategoryService.ctorParameters = [
        { type: Http, },
    ];
    return CategoryService;
}());

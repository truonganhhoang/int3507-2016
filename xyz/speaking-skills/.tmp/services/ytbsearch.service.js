import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export var YtbSearchService = (function () {
    function YtbSearchService(http) {
        this.http = http;
        this.key = 'AIzaSyC-EG5rXbCe3YeLuz0l0bthIhAmpnW0c3Y';
    }
    YtbSearchService.prototype.getVideos = function (myQuery) {
        var _this = this;
        var stringParamsYoutube = "?key=" + this.key + "&type=video&q=" + myQuery + "&part=id,snippet&maxResults=20";
        var url = "https://www.googleapis.com/youtube/v3/search" + stringParamsYoutube;
        return new Promise(function (resolve) {
            _this.http.get(url).subscribe(function (res) {
                resolve(res.json());
            });
        });
    };
    YtbSearchService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    YtbSearchService.ctorParameters = [
        { type: Http, },
    ];
    return YtbSearchService;
}());

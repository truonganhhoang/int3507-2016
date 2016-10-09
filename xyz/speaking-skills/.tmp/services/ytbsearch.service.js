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
    YtbSearchService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Http])
    ], YtbSearchService);
    return YtbSearchService;
}());

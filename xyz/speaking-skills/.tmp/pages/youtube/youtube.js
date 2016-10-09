var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YtbSearchService } from '../../services/ytbsearch.service';
import { VideoPlayer } from '../video-player/video-player';
/*
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Youtube = (function () {
    function Youtube(navCtrl, ytbSearchService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.ytbSearchService = ytbSearchService;
        this.ytbSearchService.getVideos('speaking+english').then(function (res) {
            _this.videos = res['items'];
        });
    }
    Youtube.prototype.ionViewDidLoad = function () {
        console.log('Hello Youtube Page');
    };
    Youtube.prototype.playVideo = function (video) {
        //go to play-video.html and send the video variable (the selected video)
        this.navCtrl.push(VideoPlayer, { video: video });
    };
    Youtube = __decorate([
        Component({
            selector: 'page-youtube',
            templateUrl: 'youtube.html',
            providers: [YtbSearchService]
        }), 
        __metadata('design:paramtypes', [NavController, YtbSearchService])
    ], Youtube);
    return Youtube;
}());

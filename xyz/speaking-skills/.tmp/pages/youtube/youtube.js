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
    Youtube.decorators = [
        { type: Component, args: [{
                    selector: 'page-youtube',
                    templateUrl: 'youtube.html',
                    providers: [YtbSearchService]
                },] },
    ];
    /** @nocollapse */
    Youtube.ctorParameters = [
        { type: NavController, },
        { type: YtbSearchService, },
    ];
    return Youtube;
}());

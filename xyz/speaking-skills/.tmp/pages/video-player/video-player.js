import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
/*
  Generated class for the VideoPlayer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var VideoPlayer = (function () {
    function VideoPlayer(navCtrl, navParams, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.video = this.navParams.get('video');
        this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + this.video['id']['videoId']);
    }
    VideoPlayer.prototype.ngOnInit = function () {
    };
    VideoPlayer.prototype.ionViewDidLoad = function () {
        console.log('Hello VideoPlayer Page');
    };
    VideoPlayer.decorators = [
        { type: Component, args: [{
                    selector: 'page-video-player',
                    templateUrl: 'video-player.html'
                },] },
    ];
    /** @nocollapse */
    VideoPlayer.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: DomSanitizer, },
    ];
    return VideoPlayer;
}());

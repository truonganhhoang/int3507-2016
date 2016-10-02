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
        //src="http://www.youtube.com/embed/EY0vwK7a2yg" 
    }
    VideoPlayer.prototype.ngOnInit = function () {
    };
    VideoPlayer.prototype.ionViewDidLoad = function () {
        console.log('Hello VideoPlayer Page');
    };
    VideoPlayer = __decorate([
        Component({
            selector: 'page-video-player',
            templateUrl: 'video-player.html'
        }), 
        __metadata('design:paramtypes', [NavController, NavParams, DomSanitizer])
    ], VideoPlayer);
    return VideoPlayer;
}());

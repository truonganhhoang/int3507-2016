import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RecordAudio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

declare var MediaStreamRecorder: any;

@Component({
  selector: 'page-record-audio',
  templateUrl: 'record-audio.html'
})


export class RecordAudio {

	context = new AudioContext();
  destination;
  disabled:boolean;
  mediaConstraints = {
    audio: true
  };


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.destination = this.context.createMediaStreamDestination();
    console.log(this.destination);

    console.log('Hello RecordAudio Page');


  }

  

  captureUserMedia(mediaConstraints, successCallback, errorCallback) {
                navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback);
  }



}

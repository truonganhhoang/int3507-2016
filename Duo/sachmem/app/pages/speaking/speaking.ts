import { Component, OnInit, NgZone, EventEmitter, Output, OnChanges, SimpleChange } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HelperService } from '../../services/helper.service'; 

declare var SpeechRecognition: any;

@Component({
	selector: 'speaking-page',
  templateUrl: 'build/pages/speaking/speaking.html',
  inputs: [ 'words', 'curWord' ]
})

export class SpeakingPage implements OnInit, OnChanges {
  @Output() onCorrect = new EventEmitter<boolean>();
	allWords: Object[];
	curWord: Object;
	// recognition: any;

	texts: String = 'RECORD';
	speaking: String;
  isRecording: boolean = false;
  percent: number;
  recognition: any;

	ngOnInit() { }

  ngOnChanges(changes:{[propKey: string]: SimpleChange}) {
    this.percent = 0;
    alert(this.curWord['content'] + "222");
    this.recognition = new SpeechRecognition();
    
    this.recognition.onresult = (event: Event) => {
      if (event['results'].length > 0) {
        alert(this.isRecording);
        
        var temp = 0;
        for(let i = 0; i < 3; i++) {
          temp = this.helperService.similar_text(event['results'][i][0].transcript, this.curWord['content'], 100);

          if(temp > this.percent) {
            this.percent = temp;
            this.speaking = event['results'][i][0].transcript;

          }
        }

        if(this.isRecording) this.checkAnswer();

        this.isRecording = false;
        this.texts = 'RECORD';

        this.zone.run(() => { });
      }
    };

    this.recognition.onspeechstart = (event: Event) => {
      this.isRecording = true;
      this.texts = 'RECORDING'
      this.zone.run(() => { });
    }  
  }

  constructor(private navCtrl: NavController, private zone: NgZone, private helperService: HelperService) {

  }

  record() {
    if(!this.isRecording) {
      this.recognition.start();
    } else {
      // alert('abort');
      this.isRecording = false;
      this.texts = 'RECORD';
      this.recognition.abort();
    }
  }

  checkAnswer() {
    alert("truoc condition" + this.percent);
    if(this.percent > 80) {
      alert(this.percent);
      this.onCorrect.emit(true);

    } else {
      this.onCorrect.emit(false);
    }
  }
}

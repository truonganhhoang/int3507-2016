import { Component, OnInit, NgZone, EventEmitter, Output, Input, OnChanges, SimpleChange } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HelperService } from '../../services/helper.service'; 
import { TrainingPage } from '../training/training';

declare var SpeechRecognition: any;

@Component({
  selector: 'speaking-page',
  templateUrl: 'speaking.html'
})

export class SpeakingPage implements OnInit, OnChanges {
  @Output() onCorrect = new EventEmitter<boolean>();
  @Input() curWord: Object;
  @Input() allWords: Object[];

  texts: String = 'ios-mic-outline';
  speaking: String;
  isRecording: boolean = false;
  percent: number;
  recognition: any;

  ngOnInit() { }

  ngOnChanges(changes:{[propKey: string]: SimpleChange}) {
    this.percent = 0;
    this.recognition = new SpeechRecognition();
    
    this.recognition.onresult = (event: Event) => {
      if (event['results'].length > 0) {
        
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
        this.texts = 'ios-mic-outline';

        this.zone.run(() => { });
      }
    };

    this.recognition.onspeechstart = (event: Event) => {
      this.isRecording = true;
      this.texts = 'ios-square-outline'
      this.zone.run(() => { });
    }  
  }

  constructor(private navCtrl: NavController, private zone: NgZone, private helperService: HelperService) { }

  record() {
    if(!this.isRecording) {
      this.recognition.start();
    } else {
      this.isRecording = false;
      this.texts = 'ios-mic-outline';
      this.recognition.abort();
    }
  }

  checkAnswer() {
    if(this.percent > 80) {
      this.onCorrect.emit(true);

    } else {
      this.onCorrect.emit(false);
      setTimeout(() => {
        this.navCtrl.push(TrainingPage, {
          word: this.curWord
        });
      }, 1000);
    }
  }
}

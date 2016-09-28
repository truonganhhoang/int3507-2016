import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChange,
         trigger, state, style, transition, animate, keyframes
       } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NativeService } from '../../services/native.service';
import { HelperService } from '../../services/helper.service';

import { TrainingPage } from '../training/training';

@Component({
  selector: 'reading-page',
  templateUrl: 'build/pages/reading/reading.html',
  providers: [ NativeService ],
  inputs: [ 'curWord', 'allWords' ],
  animations: [
    trigger('answerState', [
      state('right', style({
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
        color: 'white',
      })),
      state('wrong', style({
        backgroundColor: '#f44336',
        color: 'white',
        borderColor: '#f44336',
      })),
      transition('void => *', [
        animate('500ms ease-out', keyframes([
          style({transform: 'scale(0)', offset: 0}),
          style({transform: 'scale(1.1)', offset: 0.5}),
          style({transform: 'scale(1)', offset: 1})
        ]))
      ])
    ])
  ]
})

export class ReadingPage implements OnInit, OnChanges {
  // Biến trả về cho fighting, khi đúng thì gọi hàm next()
  @Output() onCorrect = new EventEmitter<boolean>();
  allWords: Object[];
  curWord: Object;
  answers: Object[] = [];

  constructor(private navCtrl: NavController, private navParams: NavParams, private nativeService: NativeService, private helperService: HelperService) { }

  ngOnInit() { }

  ngOnChanges(changes:{[propKey: string]: SimpleChange}) {
    let NO_OF_ANS = 4;
    if (this.allWords.length < NO_OF_ANS) {
      NO_OF_ANS = this.allWords.length;
    }

    // Tạo mảng các từ sai
    let wrongWord = [];
    for (let i = 0; i < this.allWords.length; i++) {
      if (this.curWord['id'] != this.allWords[i]['id']) {
        wrongWord.push(this.allWords[i]);
      }
    }

    // Random vị trí từ đúng
    let position = this.helperService.random(NO_OF_ANS);

    // Tạo mảng các câu trả lời
    this.answers = [];

    for (let i = 0; i < NO_OF_ANS; i++) {
      let temp;

      if (i == position) {
        temp = JSON.parse(JSON.stringify(this.curWord));
      } else {
        let r = this.helperService.random(wrongWord.length);
        temp = JSON.parse(JSON.stringify(wrongWord[r]));
        wrongWord.splice(r, 1);
      }

      this.answers.push(temp);
    }
  }

  checkAnswer(item: Object) {
    if (item['id'] == this.curWord['id']) {
      this.onCorrect.emit(true);
      item['state'] = 'right';
      this.nativeService.playAudio('correct');
      this.nativeService.tts(this.curWord['content']);
    } else {
      this.onCorrect.emit(false);
      item['state'] = 'wrong';
      this.nativeService.playAudio('wrong');
      
      setTimeout(() => {
        this.navCtrl.push(TrainingPage, {
          word: this.curWord
        });
      }, 1000);
    }
  }
}

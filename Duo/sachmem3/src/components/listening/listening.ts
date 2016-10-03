import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChange,
         trigger, state, style, transition, animate, keyframes
       } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NativeService } from '../../providers/native-service';
import { HelperService } from '../../providers/helper-service';

import { Learning } from '../../pages/learning/learning';

@Component({
  selector: 'listening-page',
  templateUrl: 'listening.html',
  providers: [ NativeService ],
  animations: [
    trigger('answerState', [
      state('choosen', style({
        backgroundColor: '#387ef5',
        color: 'white',
        transform: 'scale(1.1)'
      })),
      state('right', style({
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
        color: 'white',
        transform: 'scale(1.1)',
      })),
      state('wrong', style({
        backgroundColor: '#f44336',
        color: 'white',
        borderColor: '#f44336',
        transform: 'scale(1.1)',
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

export class Listening implements OnInit, OnChanges {
  // Biến trả về cho fighting, khi đúng thì gọi hàm next()
  @Output() onCorrect = new EventEmitter<boolean>();
  @Input() curWord: Object;
  @Input() allWords: Object[];

  answers: Object[] = [];
  choosen: Object;
  disabled: boolean = false;

  constructor(private navCtrl: NavController, private navParams: NavParams, private nativeService: NativeService, private helperService: HelperService) { }

  ngOnInit() { }

  ngOnChanges(changes:{[propKey: string]: SimpleChange}) {
    let NO_OF_ANS = 3;
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

    this.choosen = undefined;
    this.disabled = false;
  }

  choose(item: Object): void {
    // Đã trả lời, không cho click đáp án khác
    if (this.disabled) return;

    this.choosen = item;
    this.nativeService.tts(item['content']);

    for (let i = 0; i < this.answers.length; i++) {
      this.answers[i]['state'] = '';
    }

    item['state'] = 'choosen';
  }

  checkAnswer() {
    // Đã trả lời, không cho click check nữa
    if (this.disabled) return;

    // Khóa check
    this.disabled = true;

    if (this.choosen['id'] == this.curWord['id']) {
      this.onCorrect.emit(true);
      this.choosen['state'] = 'right';
      this.nativeService.playAudio('correct');
    } else {
      this.onCorrect.emit(false);
      this.choosen['state'] = 'wrong';
      this.nativeService.playAudio('wrong');
      this.nativeService.vibrate();

      setTimeout(() => {
        this.navCtrl.push(Learning, {
          word: this.curWord
        });
      }, 1000);
    }
  }
}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NativeService } from '../../services/native.service';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'reading-page',
  templateUrl: 'build/pages/reading/reading.html',
  providers: [ NativeService ],
  inputs: [ 'curWord', 'allWords' ]
})

export class ReadingPage implements OnInit{
  // Biến trả về cho fighting, khi đúng thì gọi hàm next()
  @Output() onCorrect = new EventEmitter<boolean>();
  allWords: Object[];
  curWord: Object;
  answers: Object[] = [];

  constructor(private nativeService: NativeService, private helperService: HelperService) { }

  ngOnInit() { }

  ngOnChanges(event) {
    if (this.allWords.length < 5) {
      var NO_OF_ANS = this.allWords.length;
    } else {
      var NO_OF_ANS = 5;
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
    for (let i = 0; i < NO_OF_ANS; i++) {
      if (i == position) {
        this.answers[i] = this.curWord;
      } else {
        let r = this.helperService.random(wrongWord.length);
        this.answers[i] = wrongWord[r];
        wrongWord.splice(r, 1);
      }
    }
  }

  checkAnswer(item: Object) {
    if (item['id'] == this.curWord['id']) {
      this.onCorrect.emit(true);
      this.nativeService.playAudio('correct');
      this.nativeService.tts(this.curWord);
    } else {
      this.onCorrect.emit(false);
      this.nativeService.playAudio('wrong');
    }
  }
}

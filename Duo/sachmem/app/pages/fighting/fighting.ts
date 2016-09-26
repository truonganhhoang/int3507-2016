import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WordService } from '../../services/word.service';
import { HelperService } from '../../services/helper.service'
import { ReadingPage } from '../reading/reading';
import { ListeningPage } from '../listening/listening';
import { WritingPage } from '../writing/writing';
import { SpeakingPage } from '../speaking/speaking';

@Component({
  templateUrl: 'build/pages/fighting/fighting.html',
  providers: [ WordService, HelperService ],
  directives: [ ReadingPage, ListeningPage, WritingPage, SpeakingPage ]
})

export class FightingPage implements OnInit {
  words: Object[];
  curWord: Object;
  selectedGame: String;
  //mang cac tu khong thay doi de truyen cho cac game
  allWords: Object[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private wordService: WordService, private helperService: HelperService) {
    let unitId = navParams.get('unitId');

    wordService.getWords(unitId).then(result => {
      this.words = result;
      // Gán allWords là mảng dữ liệu không đổi
      this.allWords = this.words.slice();

      // Tạm thời gán cho 'games' 4 giá trị l, s, r, w. 
      // Khi lưu dữ liệu sẽ thay đổi tùy theo.
      for (let i = 0; i < this.words.length; i++) {
        this.words[i]['games'] = [ 's' ];
      }

      this.reload();
    });
  }

  ngOnInit() { }

  reload(): void {
    // Chọn từ ngẫu nhiên
    let i = this.helperService.random(this.words.length);
    this.curWord = this.words[i];

    // Chọn game ngẫu nhiên
    let j = this.helperService.random(this.words[i]['games'].length);
    this.selectedGame = this.words[i]['games'][j];

    console.log('Word: ' + this.curWord['content'] + ', game: ' + this.selectedGame);
  }

  next() {
    for (let i = 0; i < this.curWord['games'].length; i++) {
      if (this.curWord['games'][i] == this.selectedGame) {
        this.curWord['games'].splice(i, 1);
        break;
      }
    }

    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i]['games'].length == 0) {
        this.words.splice(i, 1);
      }
    }

    if (this.words.length == 0) {
      this.navCtrl.pop();
    } else {
      this.reload();        
    }
  }
  
  onCorrect(correct: boolean): void {
    if (correct) {
      this.next();    
    }
  }
}

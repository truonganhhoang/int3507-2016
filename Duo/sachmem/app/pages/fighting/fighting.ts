import { Component, OnInit,
         trigger, state, style, transition, animate, keyframes
       } from '@angular/core';
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
  directives: [ ReadingPage, ListeningPage, WritingPage, SpeakingPage ],
  animations: [
    trigger('iconState', [
      state('right',   style({
        backgroundColor: '#387ef5',
        borderColor: '#387ef5',
        color: 'white',
      })),
      transition('* => right', [
        animate('200ms ease-in', keyframes([
          style({transform: 'scale(1.1)', offset: 0.5}),
          style({transform: 'scale(1)', offset: 1})
        ]))
      ])
    ])
  ]
})

export class FightingPage implements OnInit {
  words: Object[];
  curWord: Object;
  selectedGame: String;
  //mang cac tu khong thay doi de truyen cho cac game
  allWords: Object[];
  iconState: string;

  constructor(private navCtrl: NavController, private navParams: NavParams, private wordService: WordService, private helperService: HelperService) {
    let unitId = navParams.get('unitId');

    wordService.getWords(unitId).then(result => {
      this.words = result;
      // Gán allWords là mảng dữ liệu không đổi
      this.allWords = this.words.slice();

      // Tạm thời gán cho 'games' 4 giá trị l, s, r, w. 
      // Khi lưu dữ liệu sẽ thay đổi tùy theo.
      for (let i = 0; i < this.words.length; i++) {
        this.words[i]['games'] = [ 'l', 'w', 'r' ];
      }

      this.reload();
    });
  }

  ngOnInit() { }

  reload(): void {
    this.iconState = 'none';
    // Chọn từ ngẫu nhiên
    let i = this.helperService.random(this.words.length);
    // this.curWord = this.words[i];
    this.curWord = JSON.parse(JSON.stringify(this.words[i]));

    // Chọn game ngẫu nhiên
    let j = this.helperService.random(this.words[i]['games'].length);
    // this.selectedGame = this.words[i]['games'][j];
    this.selectedGame = JSON.parse(JSON.stringify(this.words[i]['games'][j]));

    console.log('Word: ' + this.curWord['content'] + ', game: ' + this.selectedGame);
  }

  next() {
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i]['id'] == this.curWord['id']) {
        for (let j = 0; j < this.words[i]['games'].length; j++) {
          if (this.words[i]['games'][j] == this.selectedGame) {
            this.words[i]['games'].splice(j, 1);
            break;
          }
        } 
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
      this.iconState = 'right';
      setTimeout(() => {
        this.next();
      }, 1000);
    } else {
      setTimeout(() => {
        this.reload();
      }, 1500);
    }
  }
}

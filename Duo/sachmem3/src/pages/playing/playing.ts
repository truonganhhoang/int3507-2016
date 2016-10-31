import { Component, OnInit, NgZone,
         trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WordService } from '../../providers/word-service';
import { HelperService } from '../../providers/helper-service';

import { NativeService } from '../../providers/native-service';

/*
  Generated class for the Playing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-playing',
  templateUrl: 'playing.html',
  providers: [ WordService, HelperService, NativeService ],
  animations: [
    trigger('iconState', [
      state('none', style({
        border: '#387ef5 1px solid',
        background: 'white',
        color: '#387ef5'
      })),
      state('right',   style({
        background: '#387ef5',
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
export class Playing implements OnInit {
  words: Object[];
  curWord: Object;
  selectedGame: string;
  //mang cac tu khong thay doi de truyen cho cac game
  allWords: Object[];
  iconState: string = 'none';
  unitId: number;

  constructor(private navCtrl: NavController, private navParams: NavParams, private wordService: WordService,
              private helperService: HelperService, private zone: NgZone, private nativeService: NativeService) { }

  ngOnInit() { 
    this.unitId = this.navParams.get('unitId');

    this.wordService.getWordsByUnit(this.unitId).then(result => {
      this.words = result;
      // Gán allWords là mảng dữ liệu không đổi
      this.allWords = this.words.slice();

      // Tạm thời gán cho 'games' 4 giá trị l, s, r, w. 
      // Khi lưu dữ liệu sẽ thay đổi tùy theo.
      for (let i = 0; i < this.words.length; i++) {
        this.words[i]['games'] = [ 'r', 'l', 'w' ];
      }

      this.reload();
    });
  }

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

    this.zone.run(() => { });
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
        //Native Storage save learned word
        this.nativeService.updateLearned(this.words[i]['id']);

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

  showGuide(): void {
    let txt: string = 'oops!';

    switch (this.selectedGame) {
      case 'r':
        txt = 'Choose the correct word matching with the given meaning.';
        break;

      case 'w':
        txt = 'Spell the word with the given meaning.';
        break;

      case 'l':
        txt = 'Choose the correct pronunciation of the English word matching with the given meaning.';
        break;

      default:
        // code
        break;
    }

    this.helperService.presentToast(txt);
  }

}

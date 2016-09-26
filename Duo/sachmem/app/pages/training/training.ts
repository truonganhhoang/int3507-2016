import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FightingPage } from '../fighting/fighting';

import { WordService } from '../../services/word.service';
import { NativeService } from '../../services/native.service';

@Component({
  templateUrl: 'build/pages/training/training.html',
  providers: [ WordService, NativeService ]
})

export class TrainingPage implements OnInit {
  words: Object[] = [];
  curWord: Object;
  curNum: number = 0;
  pageType: number; // Loại trang; 0 = training, 1 = review;

  constructor(private navCtrl: NavController, private navParams: NavParams, private wordService: WordService, private nativeService: NativeService) {
    let unitId = this.navParams.get('unitId');
    let word = this.navParams.get('word');

    if (unitId != undefined) {
      this.pageType = 0;
      wordService.getWords(unitId).then(res => {
        this.words = res;
        this.reload();
      });
    } else {
      this.pageType = 1;
      this.words = [ word ];
      this.reload();
    }
  }

  ngOnInit(): void { }

  reload(): void {
    this.curWord = this.words[this.curNum];
    this.speak();
  }

  next() {
    this.curNum ++;
    this.reload();
  }

  previous() {
    this.curNum --;
    this.reload(); 
  }

  isEnd(): boolean {
    if (this.curNum >= this.words.length - 1) return true;
    return false;
  }

  isBegin(): boolean {
    if (this.curNum <= 0) return true;
    return false;
  }

  enterFightingPage() {
    this.navCtrl.push(FightingPage, {
      unitId: this.navParams.get('unitId')
    });
  }

  back(): void {
    this.navCtrl.pop();
  }

  speak(): void {
    this.nativeService.tts(this.curWord['content']);
  }
}

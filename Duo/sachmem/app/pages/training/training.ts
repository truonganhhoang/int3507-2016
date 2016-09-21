import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WordService } from '../../services/word.service'

import { TextToSpeech } from 'ionic-native';

/*
  Generated class for the TrainingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/training/training.html',
  providers: [ WordService ]
})

export class TrainingPage implements OnInit {
  words: Object[];
  curWord: Object;
  curNum: number = 0;

  constructor(private navCtrl: NavController, private navParams: NavParams, private wordService: WordService) {
    let unitId = this.navParams.get('unitId');
    wordService.getWords(unitId).then(res => {
      this.words = res;
      // this.curWord = this.words[this.curNum];
      
      this.reload();
      this.speak();
      // console.log(this.curWord['content']);  
    });
  }

  ngOnInit(): void {
    // this.reload();
    // this.curWord = this.words[this.curNum];
    
  }

  next() {
    this.curNum ++;
    this.reload();
    this.speak();
    
  }

  speak() {
    TextToSpeech.speak(this.curWord['content'])
      .then(() => alert('Success'))
      .catch((reason: any) => alert(reason));
  }

  previous() {
    this.curNum --;
    this.reload(); 
  }

  isEnd(): boolean {
    if(this.curNum >= this.words.length - 1) return true;
    return false;
  }

  isBegin(): boolean {
    if(this.curNum <= 0) return true;
    return false;
  }

  reload() {
    this.curWord = this.words[this.curNum];
  }
}

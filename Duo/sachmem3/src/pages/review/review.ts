import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NativeService } from '../../providers/native-service';
import { WordService } from '../../providers/word-service';

import { Learning } from '../learning/learning';

/*
  Generated class for the Review page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-review',
  providers: [ NativeService, WordService ],
  templateUrl: 'review.html'
})

export class Review implements OnInit {
  learnedWords: Object[] = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, private nativeService: NativeService, private wordService: WordService) {}

  ngOnInit() {
    let bookId = this.navParams.get('bookId');

    this.wordService.getReviewWords(bookId).then(res => {
      this.learnedWords = res;
      console.log(this.learnedWords.length);
    });
  }

  enterLearning(item) {
    this.navCtrl.push(Learning, {
      word: item
    });
  }

  speak(item): void {
    this.nativeService.tts(item.content);
  }

  ionViewDidLoad() {
    console.log('Hello Review Page');
  }
  
}

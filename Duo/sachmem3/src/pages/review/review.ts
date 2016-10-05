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
  bookId: number;
  learnedWords: Object[];

  constructor(public navCtrl: NavController, private navParams: NavParams, private nativeService: NativeService, private wordService: WordService) {}

  ngOnInit() {
    let allWords: Object[] = [];
    this.bookId = this.navParams.get('bookId');

    let array = [];
    this.nativeService.getStorage('learned')
      .then(
        data => {
          array = data;
          console.log(array);
          console.log(this.wordService.getWordsInArray(this.bookId, array));
          
          this.wordService.getWordsInArray(this.bookId, array).then(res => {
            this.learnedWords = res;
          });
        }, 
        err => { }
      );
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

import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WordService } from '../../services/word.service'
import { ReadingPage } from '../reading/reading'
import { ListeningPage } from '../listening/listening' 
import { WritingPage } from '../writing/writing'
import { SpeakingPage } from '../speaking/speaking'

/*
  Generated class for the FightingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/fighting/fighting.html',
  providers: [ WordService ],
  directives: [ ReadingPage, ListeningPage, WritingPage, SpeakingPage ]
})

export class FightingPage {
  @ViewChild(ReadingPage) ReadingPage:ReadingPage;
	words: Object[];
	curWord: Object;
  curNum: number = 0;
 	selectedGame: number;

 	// Dung mang de luu gia tri random, quyet dinh xem se vao tu nao va vao game nao
 	array: Object[] = [];


  constructor(private navCtrl: NavController,private navParams: NavParams, private wordService: WordService) {
    let unitId = this.navParams.get('unitId');
    wordService.getWords(unitId).then(res => {
      this.words = res;
      this.curWord = this.words[this.curNum];
      // console.log(this.curWord['content']);  
      this.shuffleArray(this.words);
      // console.log(this.words);
			
			//Khoi tao bien status, luu cac game chua choi
			for(var i = 0; i < this.words.length; i++) {
      	this.words[i]["status"] = [1,2,3,4];	
      }

      //Tong so game can choi
      for(var i = 0; i < this.words.length * 4; i++) {
      	this.array[i] = i;
      }

      //Xao tron thu tu trong mang nay
      this.shuffleArray(this.array);

      // console.log(this.getWord(this.array[0]));



      this.reload();

      // console.log(this.array);
  		
    });
  }

  getGame(number) {
  	return number % 4;
  }

  getWord(number) {
  	// let temp: String;
  	var temp = (number/4).toString();
  	// var s = "sss";
  	// var result = parseInt(s);
  	// parseInt(number/4 + 1, )
  	return parseInt(temp);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  reload() {
  	this.curWord = this.words[this.getWord(this.array[0])];
  	this.selectedGame = this.getGame(this.array[0]);
  }

  checkEnd() {
  	if(this.array.length <= 0) {
  		return true;
  	}

  	return false;
  }

  next() {
  	this.array.splice(0,1);

  	//Kiem tra xem da ket thuc hay chua
  	if(this.checkEnd()) {
  		console.log("Het tu roi con dau");	
  	} else {
  		this.reload();	
  	}
  }

  onCorrect(correct: boolean) {
    if(correct) this.next();
  }

}

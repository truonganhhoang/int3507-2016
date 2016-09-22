import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReadingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'reading-page',
  templateUrl: 'build/pages/reading/reading.html',
  inputs: [ 'words', 'curWord']
})

export class ReadingPage implements OnInit {

  @Output() onCorrect = new EventEmitter<boolean>();
	words: Object[];
	curWord: Object;
	position: number;
	noOfAns: number;
	//mang cau tra loi
	answers: Object[] = [];
	//cau tra loi dung hay sai
	correct: boolean = false;


	ngOnInit() {
		if (this.words.length <= 4) this.noOfAns = this.words.length;
		else this.noOfAns = 4;	

		//vi tri tu dung
		this.position = Math.floor((Math.random() * this.noOfAns));

		//Tao mang cac tu sai
		let wrongWord = [];
		for (var i = 0; i < this.words.length; i++) {
			if (this.curWord['id'] != this.words[i]['id']) {
				wrongWord.push(this.words[i]);
			}
		}

		//Tao cac cau tra loi
		for (i = 0; i< this.noOfAns; i++) {
			if (i == this.position) {
				this.answers[i] = this.curWord;
				this.answers[i]['position'] = true;
			} else {
				let r = Math.floor((Math.random() * wrongWord.length));
				this.answers[i] = wrongWord[r];
				this.answers[i]['position'] = false;
		    wrongWord.splice(r, 1);
			}
		}
	}

	//Kiem tra dung sai
	checkAnswer(item: Object) {
		//Tra loi dung
		if ( item['position'] == true) {
			console.log('dung');
			//goi den onCorrect cua fighting.ts
			this.onCorrect.emit(true);
		} else {
			console.log('Sai');
			this.onCorrect.emit(false);
		}
	}
}

import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'reading-page',
  templateUrl: 'build/pages/reading/reading.html',
  inputs: [ 'curWord', 'allWords']
})

export class ReadingPage implements OnInit{
	// Biến trả về cho fighting, khi đúng thì gọi hàm next()
  @Output() onCorrect = new EventEmitter<boolean>();
  allWords: Object[];
	curWord: Object;
	position: number;
	noOfAns: number;
	answers: Object[] = [];
	//Biến lưu câu trả lời đúng sai
	correct: boolean = false;

	ngOnInit() {
		
	}

	ngOnChanges( event ) {

		if (this.allWords.length <= 4) this.noOfAns = this.allWords.length;
		else this.noOfAns = 4;	

		//Vị trí từ đúng
		this.position = Math.floor((Math.random() * this.noOfAns));

		//Tạo mảng các từ sai
		let wrongWord = [];
		for (let i = 0; i < this.allWords.length; i++) {
			if (this.curWord['id'] != this.allWords[i]['id']) {
				wrongWord.push(this.allWords[i]);
			}
		}

		//Tạo các câu trả lời
		for (let i = 0; i< this.noOfAns; i++) {
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
                    

	//Kiểm tra đúng sai
	checkAnswer(item: Object) {
		//Trả lời đúng
		if ( item['position'] == true) {
			console.log('dung');
			//Truyền biến true trong onCorrect của fighting
			this.onCorrect.emit(true);
		} else {
			console.log('Sai');
			this.onCorrect.emit(false);
		}
	}
}

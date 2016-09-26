import { Component, OnInit, EventEmitter, Output, OnChanges, SimpleChange,
         trigger, state, style, transition, animate
       } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NativeService } from '../../services/native.service';
import { HelperService } from '../../services/helper.service';

@Component({
	selector: 'writing-page',
  templateUrl: 'build/pages/writing/writing.html',
  providers: [ NativeService ],
  inputs: [ 'words', 'curWord' ],
  animations: [
    trigger('answerState', [
      state('void', style({
        transform: 'scale(0)',
      })),
      transition('void => *', [
        animate('200ms ease-out', style({transform: 'scale(1)'}))
      ]),
    ])
  ]
})

export class WritingPage implements OnInit, OnChanges  {
	@Output() onCorrect = new EventEmitter<boolean>();

	curWord: Object;
	allWords: Object[];
	answers: Object[] = [];
	options: Object[];
  pass: boolean;

	allLetter: Object[];

	constructor(private nativeService: NativeService, private helperService: HelperService) { }
	
	ngOnInit() { }

  ngOnChanges(changes:{[propKey: string]: SimpleChange}) {
  	this.options = [];
    this.answers = [];
  	this.allLetter = [];
    this.pass = false;

  	let alphabet = 'qwertyuiopasdfghjklzxcvbnm';

  	//Tao mang cho cac letter
  	for (let i = 0; i < alphabet.length; i++) {
  		this.allLetter.push(alphabet.charAt(i));
  	}

  	//Them cac tu dung vào trong mảng options
  	for (let i = 0; i < this.curWord['content'].length; i++) {
  		if (this.options.indexOf(this.curWord['content'].charAt(i)) < 0) {
  			this.options.push(this.curWord['content'].charAt(i));	
  		}

  		//Loai bo chữ da co o trong all Leter để random không bị trùng
  		this.allLetter.splice(this.allLetter.indexOf(this.curWord['content'].charAt(i)), 1);
  	}

  	//options đã có các chữ cái đúng, thêm các chữ sai cho đủ.
    let temp = 10 - this.options.length;
  	for (let i = 0; i < temp; i++) {
  		let r = this.helperService.random(this.allLetter.length);
  		this.options.push(this.allLetter[r]);

  		//Loai bo tu vua them ra khoi all leter
  		this.allLetter.splice(r, 1);
  	}
  }

  backspace(): void {
    this.answers.splice(this.answers.length - 1, 1);
  }

  pick(char): void {
    this.answers.push(char);
    this.checkAnswer();
  }

  checkAnswer() {
    let temp = '';

    for (let i = 0; i < this.answers.length; i++) {
      temp += this.answers[i];
    }

    if (temp == this.curWord['content']) {
      setTimeout(() => {
        this.onCorrect.emit(true);
      }, 1000);
  
      this.nativeService.playAudio('correct');
    }
  }
}

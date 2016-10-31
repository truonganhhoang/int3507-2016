import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChange,
         trigger, state, style, transition, animate, keyframes
       } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NativeService } from '../../providers/native-service';
import { HelperService } from '../../providers/helper-service';

import { Learning } from '../../pages/learning/learning';

@Component({
	selector: 'writing-page',
  templateUrl: 'writing.html',
  providers: [ NativeService ],
  // inputs: [ 'words', 'curWord' ],
  animations: [
    trigger('answerState', [
      state('right', style({
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
        color: 'white',
      })),
      state('wrong', style({
        backgroundColor: '#f44336',
        borderColor: '#f44336',
        color: 'white',
      })),
      transition('void => *', [
        animate('100ms ease-out', keyframes([
          style({transform: 'scale(0)', offset: 0}),
          style({transform: 'scale(1.1)', offset: 0.5}),
          style({transform: 'scale(1)', offset: 1})
        ]))
      ]),
      transition('* => void', [
        animate('100ms ease-in', keyframes([
          style({transform: 'scale(1)', offset: 0}),
          style({transform: 'scale(1.1)', offset: 0.5}),
          style({transform: 'scale(0)', offset: 1})
        ]))
      ])
    ]),

    trigger('pending', [
      state('dark', style({
        backgroundColor: '#bdbdbd'
      })),
      state('light', style({
        backgroundColor: '#dedede'
      }))
    ]),
  ]
})

export class Writing implements OnInit, OnChanges  {
	@Output() onCorrect = new EventEmitter<boolean>();
	@Input() curWord: Object;	
  
	answers: Object[] = [];
	options: Object[];
	allLetter: Object[];
  answerState: string;
  pending: string = 'light';

  disabled: boolean = false;

	constructor(private navCtrl: NavController, private navParams: NavParams, private nativeService: NativeService, private helperService: HelperService) { }
	
	ngOnInit() { 
    setInterval(() => {
      if (this.pending == 'light') {
        this.pending = 'dark';
      } else {
        this.pending = 'light';
      }
    }, 500);
  }

  ngOnChanges(changes:{[propKey: string]: SimpleChange}) {
  	this.options = [];
    this.answers = [];
  	this.allLetter = [];
    this.answerState = 'none';

  	//Tao mang cho cac letter
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm';

  	for (let i = 0; i < alphabet.length; i++) {
  		this.allLetter.push(alphabet.charAt(i));
  	}

  	//Them cac tu dung vào trong mảng options
    this.curWord['content'] = this.curWord['content'].toLowerCase();
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

    // Sắp xếp lại options theo alphabet
    this.options.sort();

    this.disabled = false;
  }

  backspace(): void {
    // Đã trả lời đúng hoặc ấn skip, không cho backspace
    if (this.disabled) return;

    this.nativeService.playAudio('click');

    if (this.answers.length >= 1) {
      this.answers.splice(this.answers.length - 1, 1);
    }
  }

  pick(char): void {
    // Đã trả lời đúng hoặc ấn skip, không cho pick thêm
    if (this.disabled) return;

    this.answers.push(char);

    // So sánh sau mỗi lần pick 
    let temp = '';

    for (let i = 0; i < this.answers.length; i++) {
      temp += this.answers[i];
    }

    if (temp == this.curWord['content']) {
      this.disabled = true;
      this.onCorrect.emit(true);
      this.answerState = 'right';
      this.nativeService.playAudio('correct');
      this.nativeService.tts(this.curWord['content']);
    } else {
      this.nativeService.playAudio('tap');
    }
  }

  skip(): void {
    // Đã skip, không cho click skip nữa
    if (this.disabled) return;

    // Khóa skip
    this.disabled = true;
    this.onCorrect.emit(false);
    this.answerState = 'wrong';
    this.nativeService.playAudio('wrong');
    this.nativeService.vibrate();

    setTimeout(() => {
      this.navCtrl.push(Learning, {
        word: this.curWord
      });
    }, 1000);
  }
}

import { Component, OnInit } from '@angular/core';
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
	// @Input()
	// // curWord: Object;
	// words: Object[];	
	words: Object[];
	curWord: Object;

	ngOnInit() {
		
	}

	// click() {
	// 	console.log(this.words);
	// 	console.log(this.curWord);
	// }	
}

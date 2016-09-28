import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'writing-page',
  templateUrl: 'build/pages/writing/writing.html',
  inputs: [ 'words', 'curWord']
})

export class WritingPage implements OnInit {
	words: Object[];
	curWord: Object;

	ngOnInit() {

	}

  constructor(private navCtrl: NavController) {

  }
}

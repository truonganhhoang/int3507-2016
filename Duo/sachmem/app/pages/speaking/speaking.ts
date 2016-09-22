import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'speaking-page',
  templateUrl: 'build/pages/speaking/speaking.html',
  inputs: [ 'words', 'curWord' ]
})

export class SpeakingPage implements OnInit {
	words: Object[];
	curWord: Object;

	ngOnInit() {
		
	}

  constructor(private navCtrl: NavController) {

  }
}

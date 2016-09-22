import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'listening-page',
  templateUrl: 'build/pages/listening/listening.html',
  inputs: [ 'words', 'curWord']
})

export class ListeningPage implements OnInit {
	words: Object[];
	curWord: Object;

	ngOnInit() {
	}

  constructor(private navCtrl: NavController) {

  }
}

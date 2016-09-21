import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SpeakingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'speaking-page',
  templateUrl: 'build/pages/speaking/speaking.html',
  inputs: [ 'words', 'curWord']
})
export class SpeakingPage {
	words: Object[];
	curWord: Object;

	ngOnInit() {
		
	}

  constructor(private navCtrl: NavController) {

  }

}

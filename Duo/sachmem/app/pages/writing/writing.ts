import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the WritingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'writing-page',
  templateUrl: 'build/pages/writing/writing.html',
  inputs: [ 'words', 'curWord']
})
export class WritingPage {
	words: Object[];
	curWord: Object;

	ngOnInit() {

	}

  constructor(private navCtrl: NavController) {

  }

}

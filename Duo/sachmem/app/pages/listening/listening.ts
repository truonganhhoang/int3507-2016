import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListeningPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'listening-page',
  templateUrl: 'build/pages/listening/listening.html',
  inputs: [ 'words', 'curWord']
})
export class ListeningPage {
	words: Object[];
	curWord: Object;

	ngOnInit() {
	}

  constructor(private navCtrl: NavController) {

  }


}

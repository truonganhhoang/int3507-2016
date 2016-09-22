import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'reading-page',
  templateUrl: 'build/pages/reading/reading.html',
  inputs: [ 'words', 'curWord' ]
})

export class ReadingPage implements OnInit {
  words: Object[];
  curWord: Object;

  ngOnInit() {
    
  }
}

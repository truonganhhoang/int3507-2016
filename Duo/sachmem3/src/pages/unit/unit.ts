import { Component,
         trigger, state, style, transition, animate, keyframes
       } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UnitService } from '../../providers/unit-service';
import { WordService } from '../../providers/word-service';
import { NativeService } from '../../providers/native-service';

import { Learning } from '../learning/learning';
import { Playing } from '../playing/playing';
import { Review } from '../review/review';

@Component({
  selector: 'page-unit',
  templateUrl: 'unit.html',
  providers: [ UnitService, WordService, NativeService ],
  animations: [
    trigger('actionState', [
      state('void', style({transform: 'translateY(100%)'})),
      transition('void => *', [
        animate('200ms ease-out', keyframes([
          style({transform: 'translateY(0%)', offset: 1}),
        ]))
      ])
    ])
  ]
})

export class Unit {
  units: Object[];
  selectedUnit: number;
  bookId: number;
  learned: number;

  constructor(private navCtrl: NavController, private navParams: NavParams, private unitService: UnitService, private wordService: WordService) {
    this.bookId = this.navParams.get('bookId');
    this.unitService.getUnits(this.bookId).then(res => {
      this.units = res;  
    });
  }

  ionViewDidEnter() {
    this.wordService.getReviewWords(this.bookId).then(res => {
      this.learned = res.length;
    });
  }

  enterTraining(): void {
    this.navCtrl.push(Learning, {
      unitId: this.selectedUnit,
      bookId: this.bookId
    });
  }

  enterFighting() {
    this.navCtrl.push(Playing, {
      unitId: this.selectedUnit
    });
  }

  enterReview() {
    this.navCtrl.push(Review, {
      bookId: this.bookId 
    });
  }
}

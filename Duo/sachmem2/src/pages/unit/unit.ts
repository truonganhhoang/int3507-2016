import { Component,
         trigger, state, style, transition, animate, keyframes
       } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TrainingPage } from '../training/training'
import { FightingPage } from '../fighting/fighting'
import { UnitService } from '../../services/unit.service';

@Component({
  templateUrl: 'unit.html',
  providers: [ UnitService ],
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

export class UnitPage {
  units: Object[];
  selectedUnit: number;

  constructor(private navCtrl: NavController, private navParams: NavParams, private unitService: UnitService) {
    let bookId = this.navParams.get('bookId');
    this.unitService.getUnits(bookId).then(res => {
      this.units = res;  
    });
  }

  enterTraining() {
    this.navCtrl.push(TrainingPage, {
      unitId: this.selectedUnit
    });
  }

  enterFighting() {
    this.navCtrl.push(FightingPage, {
      unitId: this.selectedUnit
    });
  }
}

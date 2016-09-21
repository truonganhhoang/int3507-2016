import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TrainingPage } from '../training/training'
import { FightingPage } from '../fighting/fighting'
import { UnitService } from '../../services/unit.service';
/*
  Generated class for the UnitPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/unit/unit.html',
  providers: [ UnitService ],
})
export class UnitPage {
  units: Object[];
  // test: any;
  selectedUnit: number = null;

  constructor(private navCtrl: NavController, private navParams: NavParams, private unitService: UnitService) {
    // alert(this.navParams.get('bookId'));
    let bookId = this.navParams.get('bookId');
    this.unitService.getUnits(bookId).then(res => {
      this.units = res;  
    });
  }

  enterTraining() {
    // console.log(this.selectedUnit);   
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

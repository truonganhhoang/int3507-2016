import { Component, Input, OnInit } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { UnitService } from '../../providers/unit-service';

/*
  Generated class for the MyTitle component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'my-title',
  templateUrl: 'my-title.html',
  providers: [ UnitService ]
})

export class MyTitle {
  @Input() unitId: number;
  unit: Object;
  text: string;

  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.unitService.getUnitById(this.unitId).then(res => {
      this.unit = res;
    });
  }

}

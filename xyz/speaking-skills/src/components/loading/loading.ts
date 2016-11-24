import { Component } from '@angular/core';

/*
  Generated class for the Loading component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'loading',
  templateUrl: 'loading.html'
})
export class Loading {

  text: string;

  constructor() {
    console.log('Hello Loading Component');
    this.text = 'Hello World';
  }

}

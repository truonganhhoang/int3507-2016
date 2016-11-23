import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
	selector: 'writing',
  templateUrl: 'components/writing/writing.component.html',
  providers: []
})
export class WritingComponent implements OnInit{

  constructor(private router: Router){
    
    }

	ngOnInit() {

  }
}
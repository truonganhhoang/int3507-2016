import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
	selector: 'speaking',
  templateUrl: 'components/speaking/speaking.component.html',
  providers: []
})
export class SpeakingComponent implements OnInit{

  constructor(private router: Router){
    
    }

	ngOnInit() {

  }
}
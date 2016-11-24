import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { WritingService } from './writing.service';


@Component({
	selector: 'writing',
  	templateUrl: 'components/writing/writing.component.html',
  	providers: [WritingService]
})
export class WritingComponent implements OnInit{

  questions: Object[];
  param: number;
  finished: boolean;

  constructor(private writingService:WritingService,
    private router: Router
    ) {
      this.writingService.getQuestions()
        .subscribe(questions => {
          this.questions = questions;
        });
    }

    ngOnInit() {
      this.param = 0;
      this.finished = false;
    }

    gotoLesson(param: number): void{
      this.router.navigate(['/writing', param]);
      this.param = param;
      this.finished = false;
    }

    hasFinish():void {
    	this.finished = true;
    }

}
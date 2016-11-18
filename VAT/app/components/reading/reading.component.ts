import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { ReadingService } from './reading.service';

@Component({
	selector: 'reading',
  templateUrl: 'components/reading/reading.component.html',
  providers: [ReadingService]
})
export class ReadingComponent implements OnInit{ 
	questions: Object[];
  param: number;
  lower_limit: number;
  upper_limit: number;

	countCorrectAnswer: number;
	constructor(private readingService:ReadingService,
    private router: Router
    ) {
		this.readingService.getQuestions()
			.subscribe(questions => {
				this.questions = questions;
			});
  	}

	ngOnInit() {
		this.param = 1;
    this.upper_limit = this.param * 10;
    this.lower_limit = this.upper_limit - 9;
	}

  gotoLesson(param: number): void{
    this.router.navigate(['/reading', param]);
    this.param = param;
    this.upper_limit = this.param * 10;
    this.lower_limit = this.upper_limit - 9;
  }

  saveStatus(question: Object, value:String) {
    question['option'] = value;
  }

  check() {
    this.countCorrectAnswer = 0;

    for (let i = 0; i < this.questions.length; i ++){
      if(this.questions[i]['option'] == this.questions[i]['correct_answer']){
        this.countCorrectAnswer++;
        this.questions[i]['status'] = "Right";
      }else{
        this.questions[i]['status'] = "Wrong! The correct answer is " + this.questions[i]['correct_answer'];
      }
    }
  }
}
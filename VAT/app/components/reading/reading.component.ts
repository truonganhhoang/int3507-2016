import { Component, OnInit } from '@angular/core';

import { ReadingService } from './reading.service';

@Component({
	selector: 'reading',
  templateUrl: 'components/reading/reading.component.html',
  providers: [ReadingService]
})
export class ReadingComponent implements OnInit{ 
	questions: Object[];
	countCorrectAnswer: number;
	constructor(private readingService:ReadingService) {
		this.readingService.getQuestions()
			.subscribe(questions => {
				this.questions = questions;
			});
  	}

  	ngOnInit() {
  		
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
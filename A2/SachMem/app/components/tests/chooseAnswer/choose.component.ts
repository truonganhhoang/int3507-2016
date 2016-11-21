import { Component, OnInit } from '@angular/core';
import {HttpModule} from '@angular/http';

import { DataService } from './choose.service';

@Component({
    templateUrl: './app/components/tests/chooseAnswer/choose.component.html',
    styleUrls: ['./app/components/tests/chooseAnswer/choose.component.css'],
    providers: [
      DataService,
      HttpModule
     ]
})
export class ChooseComponent implements OnInit { 
	 title = 'Choose correct answer';
	 questions: Object[];
	 correct: number;
	constructor(private dataService: DataService) {
  	}

  	ngOnInit() {
  		this.dataService.getQuestion().then(res => {
			  this.questions = res;
		  });
  	}


  saveStatus(question: Object, choice:String) {
    question['choice'] = choice;
  }

  check() {
    this.correct = 0;
    for (let i = 0; i < this.questions.length; i ++){
      if(this.questions[i]['choice'] == this.questions[i]['answer']){
        this.correct++;
        this.questions[i]['status'] = "correct";
      }else{
        this.questions[i]['status'] = "incorrect";
      }
    }
  }
}
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeningService} from './listening.service';

@Component({
    selector: 'listening',
    templateUrl: 'components/listening/listening.component.html',
    providers: [ListeningService]
})
export class ListeningComponent implements OnInit{ 
	questions: Object[];
	countCorrectAnswer: number;
	constructor(private listeningService:ListeningService) {
		this.listeningService.getQuestions()
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
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListeningService} from './listening.service';

@Component({
    selector: 'listening',
    templateUrl: 'components/listening/listening.component.html',
    providers: [ListeningService]
})
export class ListeningComponent implements OnInit{ 
	questions: Object[];
	countCorrectAnswer: number;
  param: number;
  lower_limit: number;
  upper_limit: number;
	constructor(private listeningService:ListeningService,
    private router: Router ) {
		this.listeningService.getQuestions()
			.subscribe(questions => {
				this.questions = questions;
			});
  	}

  	ngOnInit() {
      this.param = 1;
  		this.upper_limit = this.param * 10;
      this.lower_limit = this.upper_limit - 9;
      this.countCorrectAnswer = 0;
  	}

    gotoLesson(param: number): void{
      this.router.navigate(['/listening', param]);
      this.param = param;
      this.upper_limit = this.param * 10;
      this.lower_limit = this.upper_limit - 9;
      this.countCorrectAnswer = 0;
    }


  saveStatus(question: Object, value:String) {
    question['option'] = value;
  }

  check() {
    this.countCorrectAnswer = 0;

    for (let i = this.lower_limit - 1; i < this.upper_limit; i ++){
      if(this.questions[i]['option'] == this.questions[i]['correct_answer']){
        this.countCorrectAnswer++;
        this.questions[i]['status'] = "Right";
      }else{
        this.questions[i]['status'] = "Wrong! The correct answer is " + this.questions[i]['correct_answer'];
      }
    }
  }

}
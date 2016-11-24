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
  advanced_questions: Object[];
  param: number;
  param_advanced: numver;
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
        this.readingService.getParagraph()
        .subscribe(advanced => {
          this.advanced_questions = advanced;
        });
    }

    ngOnInit() {
      this.param = 1;
      this.param_advanced = 0;
      this.upper_limit = this.param * 10;
      this.lower_limit = this.upper_limit - 9;
      this.countCorrectAnswer = 0;
    }

    gotoLesson(param: number): void{
      this.router.navigate(['/reading', param]);
      this.param = param;
      this.param_advanced = 0;
      this.upper_limit = this.param * 10;
      this.lower_limit = this.upper_limit - 9;
      this.countCorrectAnswer = 0;
    }

    advanced_gotoLesson(param: number): void{
      this.router.navigate(['/reading/advanced/', param]);
      this.param = 0;
      this.param_advanced = param;
      this.countCorrectAnswer = 0;
    }

    saveStatus(question: Object, value:String) {
      question['option'] = value;
    }

    saveValue(question: Object, value: String){
      question['option'] = value;
    }
    adv_check(){
      this.countCorrectAnswer = 0;
        let question = this.advanced_questions[this.param_advanced - 1]['questions'];
        let length = question.length;
        //console.log(length);
        for(let j = 0; j < length; j++){
          if(question[j]['option'] == question[j]['correct_answer']){
            this.countCorrectAnswer++;
            question[j]['status'] = "Right";
          } else{
            question[j]['status'] = "Wrong! The correct answer is " + question[j]['correct_answer'];
          }
        }
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
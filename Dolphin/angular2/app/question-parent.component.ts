import {Component} from '@angular/core';
import {QUESTIONS} from './question';

@Component({
	selector: 'question-parent',
	template:`
		<h2>{{exam}} have {{questions.length}} questions</h2>
		<question-child *ngFor ="let question of questions" 
			[question] ="question">
		</question-child>`
})
export class QuestionParentComponent{
	questions =  QUESTIONS;
	exam : string = "Exam";
}
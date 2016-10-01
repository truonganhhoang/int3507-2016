import {Component,Input} from '@angular/core';
import {Question} from './question';

@Component({
	selector: 'question-child',
	template:`<h3>{{ question.question}}</h3><br>
				<p>{{question.answer}}</p>`
})
export class QuestionChildComponent {
  @Input() question: Question;
}
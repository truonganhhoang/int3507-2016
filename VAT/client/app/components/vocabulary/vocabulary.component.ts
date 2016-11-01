import { Component } from '@angular/core';
import {VocabularyService} from '../../services/vocabulary.service';
import {Vocabulary} from '../../Vocabulary';

@Component({
  moduleId: module.id,
  selector: 'vocabulary',
  templateUrl: 'vocabulary.component.html'
})
export class VocabularyComponent {
	vocabularies : Vocabulary[];
	en: string;
	type: string;
	vi: string;

	constructor(private vocabularyService: VocabularyService){
		this.vocabularyService.getAllVoca()
			.subscribe(vocabularies => {
				this.vocabularies = vocabularies;
			});
	}

	addVoca(event){
		event.preventDefault();
		var newVoca = {
			en: this.en,
			type: this.type,
			vi: this.vi
		}
		//this.vocabularies.push(newVoca);
		this.vocabularyService.addVoca(newVoca)
		.subscribe(vocabulary => {
			this.vocabularies.push(vocabulary);
			this.en = '';
			this.vi = '';
		});
	}

	deleteVoca(id){
		var vocabularies = this.vocabularies;
		this.vocabularyService.deleteVoca(id)
			.subscribe(data => {
				if(data.n == 1){
					for(var i = 0; i < vocabularies.length; i++){
						if(vocabularies[i]._id == id){
							vocabularies.splice(i, 1);
						}
					}
				}
			});
	}

}

import { Component } from '@angular/core';
import {VocabularyService} from './services/vocabulary.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [VocabularyService]
})
export class AppComponent { }

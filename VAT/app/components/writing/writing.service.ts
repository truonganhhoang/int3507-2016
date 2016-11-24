import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WritingService{

  constructor(private http: Http) {
      console.log('Init Writing Service....')
   }

  getQuestions(){
    return this.http.get('/api/writing')
      .map(res => res.json());
  }

}
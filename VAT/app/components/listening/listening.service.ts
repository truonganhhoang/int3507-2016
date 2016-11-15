import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListeningService{

  constructor(private http: Http) {
      console.log('Init Listening Service....')
   }

  getQuestions(){
    return this.http.get('/api/listening')
      .map(res => res.json());
  }
}
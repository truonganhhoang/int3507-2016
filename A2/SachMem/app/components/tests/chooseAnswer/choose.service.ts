import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService { 
  words: Object[];
  records: Object[];

  constructor(private http: Http) { }

  getQuestion(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('app/assets/data/question.json').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }
}
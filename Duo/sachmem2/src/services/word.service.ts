import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WordService { 
  words: Object[] = [];

  constructor(private http: Http) { }

  getWords(unitId: number): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('data/words.json').subscribe(res => {
        let temp = res.json();

        for(let i = 0; i < temp.length; i++) {
          if(temp[i].unit_id == unitId) {
            this.words.push(temp[i]);
          }
        }

        // console.log(this.units);
  
        resolve(this.words);

        // resolve(res.json());
      });
    }) 
  }

   getWord(wordId: number): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('data/words.json').subscribe(res => {
        let temp = res.json();

        for(let i = 0; i < temp.length; i++) {
          if(temp[i].id == wordId) {
            this.words.push(temp[i]);
          }
        }

        resolve(this.words);
      });
    }) 
  }
}
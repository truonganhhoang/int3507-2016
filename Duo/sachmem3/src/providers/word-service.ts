import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WordService { 

  constructor(private http: Http) { }

  getWords(unitId: number): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('assets/data/words.json').subscribe(res => {
        let temp = res.json();
        let words: Object[] = [];

        for(let i = 0; i < temp.length; i++) {
          if(temp[i].unit_id == unitId) {
            words.push(temp[i]);
          }
        }

        // console.log(this.units);
  
        resolve(words);

        // resolve(res.json());
      });
    }) 
  }

  getWordsInArray(bookId: number, array: number[]): Promise<Object[]> {
    return new Promise(resolve => {
      this.http.get('assets/data/words.json').subscribe(res => {
        let temp = res.json();
        let words: Object[] = [];

        //
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].book_id == bookId && array.indexOf(parseInt(temp[i].id)) >= 0) {
            words.push(temp[i]);
          }
        }

        resolve(words);
      });
    }) 
  }
}
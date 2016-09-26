import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WordService { 
  words: Object[] = [];

  constructor(private http: Http) { }

  getWords(unitId): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('data/words.json').subscribe(res => {
        var temp = res.json();

        for(var i = 0; i < temp.length; i++) {
          if(temp[i].unit_id == unitId) {
            this.words.push(temp[i])
          }
        }

        // console.log(this.units);
  
        resolve(this.words);

        // resolve(res.json());
      });
    }) 
  }
}
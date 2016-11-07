import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WordService { 
  words: Object[] = [];

  constructor(private http: Http) { }

  getWord(name): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('https://xyz-server.herokuapp.com/api/category/'+name).subscribe(res => {
        resolve(res.json());
      });
    }) 
  }

   getWord2(categoryId): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('assets/data/word.json').subscribe(res => {
        var data = res.json();
        for(let i = 0; i < data.length; i++) {
          if(data[i].category_id == categoryId) {
            this.words.push(data[i]);
          }
        }
        resolve(this.words);
      });
    }) 
  }
}

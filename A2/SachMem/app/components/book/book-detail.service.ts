import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookDetailService { 
  units: Object[] = [];

  constructor(private http: Http) { }

  getUnits(bookId): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('./app/assets/data/units.json').subscribe(res => {
        var temp = res.json();
        for(var i = 0; i < temp.length; i++) {
          if(temp[i].book_id == bookId) {
            this.units.push(temp[i])
          }
        }  
        resolve(this.units);
      });
    }) 
  }
}
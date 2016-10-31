import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UnitService { 
  units: Object[] = [];

  constructor(private http: Http) { }

  getUnits(bookId): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('assets/data/units.json').subscribe(res => {
        var temp = res.json();

        for(var i = 0; i < temp.length; i++) {
          if(temp[i].book_id == bookId) {
            this.units.push(temp[i])
          }
        }

        // console.log(this.units);
  
        resolve(this.units);

        // resolve(res.json());
      });
    }) 
  }

  getUnitById(unitId): Promise<Object>{
    return new Promise(resolve => {
      this.http.get('assets/data/units.json').subscribe(res => {
        var temp = res.json();

        for (var i = 0; i < temp.length; i++) {
          if (temp[i].id == unitId) {
            // this.units.push(temp[i])
            resolve(temp[i]);
          }
        }

        // resolve(this.units);
      });
    }) 
  }
}
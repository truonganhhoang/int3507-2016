import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService { 
	category: Object[];

  constructor(private http: Http) { }

  getCategory(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('assets/data/category.json').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }

}

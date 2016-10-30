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
      this.http.get('https://xyz-server.herokuapp.com/api/category').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }

}

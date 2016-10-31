import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WordService { 

  constructor(private http: Http) { }

  getWord(name): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('https://xyz-server.herokuapp.com/api/category/'+name).subscribe(res => {
        resolve(res.json());
      });
    }) 
  }
}

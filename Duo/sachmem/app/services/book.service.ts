import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService { 
  books: Object[];

  constructor(private http: Http) { }

  getBooks(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('data/books.json').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }
}
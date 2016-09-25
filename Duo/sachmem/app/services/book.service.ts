import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Book } from '../entities/book';

@Injectable()
export class BookService { 
  books: Book[];

  constructor(private http: Http) { }

  getBooks(): Promise<Book[]>{
    return new Promise(resolve => {
      this.http.get('data/books.json').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }
}
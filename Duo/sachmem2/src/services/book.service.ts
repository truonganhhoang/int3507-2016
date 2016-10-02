import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// import { Book } from '../entities/book';

@Injectable()
export class BookService { 
  books: Object[];

  constructor(private http: Http) { }

  getBooks(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('assets/data/books.json').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }

  // getBooks(): Promise<Book[]> {
  //   return this.http.get(this.heroesUrl)
  //              .toPromise()
  //              .then(response => response.json().data as Hero[])
  //              .catch(this.handleError);
  // }
}
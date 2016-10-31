import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from 'bootstrap';

import { BookService } from './book.service';

@Component({
  selector: 'list-book',
  providers: [ BookService ],
  templateUrl: './app/components/book/book.component.html',
  styleUrls: ['./app/components/book/book.component.css']
})

export class BookComponent implements OnInit {
  books: Object[];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().then(res => {
      this.books = res;
    });
  }

  gotoDetail(): void {
    let link = ['/books', 1];
    this.router.navigate(link);
  }
}
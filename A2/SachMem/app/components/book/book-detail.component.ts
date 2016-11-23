import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }               from '@angular/common';

import { BookDetailService } from './book-detail.service';
import { BookService } from './book.service';

@Component({
  selector: 'book-detail',
  providers: [ BookDetailService, BookService ],
  templateUrl: './app/components/book/book-detail.component.html'
})

export class BookDetailComponent implements OnInit {
  units: Object[];
  bookId: number;
  learned: number;
  bookTitle: string;

  constructor(
    private bookDetailService: BookDetailService,
    private bookService: BookService,
    private route: ActivatedRoute,
    private location: Location,
    private router : Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.bookDetailService.getUnits(id)
        .then(book => this.bookService.getBooks());
    });
  }

  goBack(): void {
    this.location.back();
  }

  // selectedUnit() {
  //   let link = ['/books/:id', ];
  //   this.router.navigate(link);
  // }
  
}
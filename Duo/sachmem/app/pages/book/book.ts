import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookService } from '../../services/book.service';
import { UnitPage } from '../unit/unit';
import { Book } from '../../entities/book';

@Component({
  templateUrl: 'build/pages/book/book.html',
  providers: [ BookService ]
})

export class BookPage {
  books: Book[];
  segment: string = 'all';

  constructor(private navCtrl: NavController, private bookService: BookService) {
    this.bookService.getBooks().then(res => {
      this.books = res;
    });
  }

  enter(item) {
    this.navCtrl.push(UnitPage, {
      bookId: item.id
    });
  }
}

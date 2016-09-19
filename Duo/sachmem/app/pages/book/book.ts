import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookService } from '../../services/book.service';
import { UnitPage } from '../unit/unit';
import {  } from 'ionic-native';
/*
  Generated class for the BookPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/book/book.html',
  providers: [ BookService ]
})

export class BookPage {
  books: Object[];

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

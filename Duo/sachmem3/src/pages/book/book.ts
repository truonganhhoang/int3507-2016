import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BookService } from '../../providers/book-service';
import { Unit } from '../unit/unit'

/*
  Generated class for the Book page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-book',
  providers: [ BookService ],
  templateUrl: 'book.html'
})

export class Book implements OnInit {
  books: Object[];
  segment: string = 'all';

  constructor(private navCtrl: NavController, private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().then(res => {
      this.books = res;
    });
  }

  enter(item) {
    this.navCtrl.push(Unit, {
      bookId: item.id
    });
  }

  ionViewDidLoad() {
    console.log('Hello Book Page');
  }

}

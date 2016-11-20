import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryService } from '../../services/category.service';
import { Record } from '../record/record';


/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
  providers: [ CategoryService ]
})
export class Category {
	category: Object[];

  constructor(public navCtrl: NavController, private categoryService: CategoryService) {
  	this.categoryService.getCategory().then(res => {
      this.category = res;
  	});
  }

  ionViewDidLoad() {
    console.log('Hello Category Page');
  }

  enterWord(item) {
    this.navCtrl.push(Record, {
      category: item
    });
  }

}

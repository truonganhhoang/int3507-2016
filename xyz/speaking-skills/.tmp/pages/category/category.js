import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryService } from '../../services/category.service';
import { Record } from '../record/record';
/*
  Generated class for the Category page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Category = (function () {
    function Category(navCtrl, categoryService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.categoryService = categoryService;
        this.categoryService.getCategory().then(function (res) {
            _this.category = res;
        });
    }
    Category.prototype.ionViewDidLoad = function () {
        console.log('Hello Category Page');
    };
    Category.prototype.enterWord = function (item) {
        this.navCtrl.push(Record, {
            category: item
        });
    };
    Category.decorators = [
        { type: Component, args: [{
                    selector: 'page-category',
                    templateUrl: 'category.html',
                    providers: [CategoryService]
                },] },
    ];
    /** @nocollapse */
    Category.ctorParameters = [
        { type: NavController, },
        { type: CategoryService, },
    ];
    return Category;
}());

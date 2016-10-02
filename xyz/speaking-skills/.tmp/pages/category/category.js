var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    Category.prototype.enterWord = function (id) {
        this.navCtrl.push(Record, {
            categoryId: id
        });
    };
    Category = __decorate([
        Component({
            selector: 'page-category',
            templateUrl: 'category.html',
            providers: [CategoryService]
        }), 
        __metadata('design:paramtypes', [NavController, CategoryService])
    ], Category);
    return Category;
}());

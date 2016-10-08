import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export var Page2 = (function () {
    function Page2(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    Page2.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Page2, {
            item: item
        });
    };
    Page2.decorators = [
        { type: Component, args: [{
                    selector: 'page-page2',
                    templateUrl: 'page2.html'
                },] },
    ];
    /** @nocollapse */
    Page2.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return Page2;
}());

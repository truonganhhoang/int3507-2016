import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var Page1 = (function () {
    function Page1(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page1.decorators = [
        { type: Component, args: [{
                    selector: 'page-page1',
                    templateUrl: 'page1.html'
                },] },
    ];
    /** @nocollapse */
    Page1.ctorParameters = [
        { type: NavController, },
    ];
    return Page1;
}());

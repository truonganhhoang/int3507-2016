import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Category } from '../pages/category/category';
import { Youtube } from '../pages/youtube/youtube';
export var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = Youtube;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Speaking by category', component: Category },
            { title: 'Speaking with youtube', component: Youtube }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());

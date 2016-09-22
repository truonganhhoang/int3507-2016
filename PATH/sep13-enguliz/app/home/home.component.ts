/**
 * Created by Thinking on 09/15/2016.
 */

import {Component, OnInit} from "@angular/core";
@Component({
  templateUrl: 'app/home/home.component.html'
})

export class HomeComponent implements OnInit {
    private loggedIn = false;

    auth_token = '';

    constructor() {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    isLoggedIn() { return this.loggedIn; }

    ngOnInit() {
        if(this.isLoggedIn()) {
            this.auth_token = localStorage.getItem('auth_token');
        }
    }
}
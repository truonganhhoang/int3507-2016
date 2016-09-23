/**
 * Created by Thinking on 09/15/2016.
 */

import {Component, OnInit} from "@angular/core";
import {ListenService} from "../theory/listen.service";
import {Listen} from "../theory/listen.model";

@Component({
    templateUrl: 'app/home/home.component.html',
    providers: [ListenService]
})

export class HomeComponent implements OnInit {
    private loggedIn = false;

    auth_token = '';

    listens:Listen[];

    constructor(private service:ListenService) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    loadListens() {
        this.service.getListens()
            .subscribe(
                data => this.listens = data,
                err => {
                    console.error(err);
                }
            )
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    ngOnInit() {
        if (this.isLoggedIn()) {
            this.auth_token = localStorage.getItem('auth_token');
        }
        this.loadListens();
    }
}
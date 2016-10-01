/**
 * Created by Thinking on 09/15/2016.
 */

import {Component, OnInit} from "@angular/core";
import {ListenService} from "../theory/listen.service";
import {Listen} from "../theory/listen.model";
import {HomeService} from "./home.service";
import {Category} from "./category.model";

@Component({
    templateUrl: 'app/home/home.component.html',
    providers: [HomeService]
})

export class HomeComponent implements OnInit {
    private loggedIn = false;

    auth_token = '';

    categories : Category[];

    constructor(private service: HomeService) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    loadHomeDatas() {
        this.service.getHomeData()
            .subscribe(
                body => this.categories = body,
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
        this.loadHomeDatas();
    }
}
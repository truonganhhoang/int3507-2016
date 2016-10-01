/**
 * Created by Thinking on 09/15/2016.
 */

import {Component, OnInit} from "@angular/core";
import {HomeService} from "./home.service";
import {Category} from "./category.model";
import {UserService} from "../user/user.service";
import {User} from "../user/user.model";

@Component({
    templateUrl: 'app/home/home.component.html',
    providers: [HomeService]
})

export class HomeComponent implements OnInit {
    private loggedIn = false;

    user: User;
    email = '';

    categories : Category[];

    constructor(
        private service: HomeService)
    {
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

    loadUserProfile() {
        let auth_token = localStorage.getItem('auth_token');
        this.service.getProfile(auth_token).subscribe(
            data => {
                this.user = data;
                this.email = this.user.userName;
                console.log(this.email);
            },
            err => {
                console.log(err);
            }
        )
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    ngOnInit() {
        if (this.isLoggedIn()) {
            this.loadUserProfile();
        }
        this.loadHomeDatas();
    }
}
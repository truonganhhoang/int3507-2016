/**
 * Created by Thinking on 09/15/2016.
 */

import {Component, OnInit} from "@angular/core";
import {HomeService} from "./home.service";
import {Category} from "./category.model";
import {UserService} from "../user/user.service";
import {User} from "../user/user.model";
import {Router} from "@angular/router";

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
        private service: HomeService,
        private router: Router) {
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

    detailsAction(unitId) {
        if(this.loggedIn) {
            this.router.navigate(['/details', unitId]);
        } else {
            this.router.navigate(['/login']);
        }
    }

    ngOnInit() {
        this.loadHomeDatas();
    }
}
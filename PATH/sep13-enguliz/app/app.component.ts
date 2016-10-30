/**
 * Created by Thinking on 09/13/2016.
 */

import {Component, OnInit} from "@angular/core";
import {UserService} from "./user/user.service";
import {User} from "./user/user.model";
@Component({
    selector: 'my-app',
    template: `
          
        <router-outlet></router-outlet>`,
    providers: [UserService]
})

export class AppComponent implements OnInit {
    private loggedIn = false;
    public user:User;
    public email = '';


    constructor(private service:UserService) {
        this.loggedIn = !!localStorage.getItem('auth_token');
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

    logout() {
        this.service.logout(localStorage.getItem('auth_token'));
        localStorage.removeItem('auth_token');
    }

    ngOnInit() {
        if (this.isLoggedIn()) {
            this.loadUserProfile();
        }
    }
}
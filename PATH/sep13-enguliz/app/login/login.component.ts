/**
 * Created by Thinking on 09/13/2016.
 */

import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'app/login/login.component.html',
    providers: [LoginService]
})

export class LoginComponent {

    constructor(private loginService: LoginService, private router: Router){}

    actionLogin(username, password) {
        this.loginService.loginRequest(username, password)
            .subscribe(res => {
                if(res) {
                    localStorage.setItem('auth_token', res.data.access_token);
                    this.router.navigate(['']);
                }
            }, err => {
                console.log(err);
            })
    }



}
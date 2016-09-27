import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';
    errors: string[] = [];

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
    }

    public login(): void {
        this.loginService.authenticate(this.email, this.password)
            .subscribe(
                response => {
                    this.errors = [];
                    this.email = '';
                    this.password = '';

                    let data = response.json();
                    alert(data.message);
                },
                error => {
                    var body = error._body;
                    var data = JSON.parse(body);
                    this.errors =[data.message];
                }
            );
    }

}

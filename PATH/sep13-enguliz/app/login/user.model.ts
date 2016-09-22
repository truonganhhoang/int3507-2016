import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by Thinking on 09/14/2016.
 */
export class User {
    constructor(
        public email: string,
        public password: string
    ) {}
}

var users = [
    new User('admin@vnu.edu.vn', '123')
];

@Injectable()
export class AuthenticationService {

    constructor (
        private _router: Router
    ) {}

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

}

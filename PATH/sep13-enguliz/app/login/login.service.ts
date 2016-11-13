/**
 * Created by Thinking on 09/19/2016.
 */
import 'rxjs/Rx';
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LoginService {
    constructor(private http: Http) {}

    private loginUrl = "http://localhost:8080/api/v1/user/login?";
    private logoutUrl = "http://localhost:8080/api/v1/user/logout?";

    loginRequest(username, password) {
        return this.http.get(this.loginUrl + "username=" + username + "&password=" + password)
            .map((res:Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    logoutRequest(auth_token) {
        var headers = {
            access_token: auth_token
        }
        return this.http.get(this.logoutUrl, headers)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
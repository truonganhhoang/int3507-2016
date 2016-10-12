import {Http, Headers, Response} from "@angular/http";
import {AppSettings} from "../appSettings";
import {Observable} from "rxjs/Rx";
import {User} from "./user.model";
import {Injectable} from "@angular/core";
/**
 * Created by Thinking on 10/01/2016.
 */
@Injectable()
export class UserService {
    
    constructor(private http: Http) {}

    private userProfileUrl = `${AppSettings.API_ENDPOINT}/user/profile`;

    getProfile(token): Observable<User> {
        let headers = new Headers({ 'access_token': token });
        return this.http.get(this.userProfileUrl, {headers: headers})
            .map((res:Response) => res.json().data)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

    }

    private logoutUrl = `${AppSettings.API_ENDPOINT}/user/logout`;
    logout(token) {
        let headers = new Headers({ 'access_token': token });
        return this.http.get(this.logoutUrl, {headers: headers})
            .map((res:Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
import {Http, Headers, Response} from "@angular/http";
import {AppSettings} from "../appSettings";
import {Observable} from "rxjs/Rx";
import {User} from "./user.model";
/**
 * Created by Thinking on 10/01/2016.
 */

export class UserService {
    
    constructor(private http: Http) {}

    private userProfileUrl = `${AppSettings.API_ENDPOINT}/user/profile`;

    getProfile(token): Observable<User> {
        let headers = new Headers({ 'access_token': token });
        return this.http.get(this.userProfileUrl, {headers: headers})
            .map((res:Response) => res.json().data)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        
    }
}
/**
 * Created by Thinking on 09/24/2016.
 */

import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {AppSettings} from "../appSettings";
import {Observable} from "rxjs/Rx";
import {Category} from "./category.model";
import {User} from "../user/user.model";

@Injectable()
export class HomeService {

    private homeUrl = `${AppSettings.API_ENDPOINT}/home`;
    private userProfileUrl = `${AppSettings.API_ENDPOINT}/user/profile`;
    
    constructor(private http: Http) {}

    getHomeData(): Observable<Category[]> {
        return this.http.get(this.homeUrl)
                        .map((res:Response) => res.json().data)
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
                
    }


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
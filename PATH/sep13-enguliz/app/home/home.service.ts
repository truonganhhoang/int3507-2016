/**
 * Created by Thinking on 09/24/2016.
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AppSettings} from "../appSettings";
import {Observable} from "rxjs/Rx";
import {Category} from "./category.model";

@Injectable()
export class HomeService {

    private homeUrl = `${AppSettings.API_ENDPOINT}/home`;

    constructor(private http: Http) {}

    getHomeData(): Observable<Category[]> {
        return this.http.get(this.homeUrl)
                        .map((res:Response) => res.json().data)
                        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
                
    }

}
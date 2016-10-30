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
export class GrammarService {

    private grammarUrl = `${AppSettings.API_ENDPOINT}/grammar`;

    constructor(private http: Http) {}

    getGrammarData(): Observable<Category[]> {
        return this.http.get(this.grammarUrl)
            .map((res:Response) => res.json().data)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }

}
/**
 * Created by Thinking on 09/15/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Listen} from "./listen.model";
import 'rxjs/Rx';
import {Observable} from "rxjs/Rx";

@Injectable()
export class ListenService {

    constructor(private http: Http) {}

    private listenUrl = "http://localhost:8080/api/v1/theory/listen";

    getListens(): Observable<Listen[]> {
        return this.http.get(this.listenUrl)
            .map((res:Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
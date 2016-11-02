/**
 * Created by Thinking on 09/26/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {AppSettings} from "../appSettings";
import {Observable} from "rxjs/Rx";
import {Unit} from "../detail/unit.model";

@Injectable()
export class DetailService {

    private detailsUrl = `${AppSettings.API_ENDPOINT}` + "/details";
    
    constructor(private http:Http) {}

    getDetailsData(id): Observable<Unit> {
        return this.http.get(this.detailsUrl + "/" + id)
            .map((res:Response) => res.json().data)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }

    submitAns(token, id, body) {
        let headers = new Headers({ 'Content-Type': 'application/json', 'access_token': token });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.detailsUrl + "/" + id + "/submit", body, options)
            .map((res:Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }
}
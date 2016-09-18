import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
    private apiUrl: string = 'http://api-v2.uetf.me/login';

    constructor(private http: Http) {
    }

    //noinspection JSAnnotator
    authenticate(email: string, password: string): Observable<Response> {
        var data = "email=" + email + "&password=" + password;
        console.log(data);

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this
            .http.post(this.apiUrl, data, {
                headers: headers
            });
    }

}

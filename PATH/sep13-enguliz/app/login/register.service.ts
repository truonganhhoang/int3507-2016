import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AppSettings} from "../appSettings";
import {Observable} from "rxjs/Rx";
/**
 * Created by Thinking on 10/29/2016.
 */

@Injectable()
export class RegisterService {
    constructor(private http: Http){}
    
    private registerUrl = `${AppSettings.API_ENDPOINT}` + "/user/register?";
    
    registerRequest(username, password, phone, fullName) {
        return this.http.get(this.registerUrl 
            + "username=" + username
            + "&password=" + password 
            + "&phone=" + phone
            + "&fullName=" + fullName)
            .map((res:Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
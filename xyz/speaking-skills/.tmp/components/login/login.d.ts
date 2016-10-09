import { OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
export declare class Login implements OnInit {
    private http;
    profile: Object;
    constructor(http: Http);
    ngOnInit(): void;
    login(): void;
    loginSilent(): void;
    logout(): void;
    disconnect(): void;
}

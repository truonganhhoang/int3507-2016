import { OnInit } from '@angular/core';
export declare class Login implements OnInit {
    profile: Object;
    constructor();
    ngOnInit(): void;
    login(): void;
    loginSilent(): void;
    logout(): void;
    disconnect(): void;
}

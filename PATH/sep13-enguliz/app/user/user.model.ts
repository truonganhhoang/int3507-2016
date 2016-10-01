import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by Thinking on 09/14/2016.
 */
export class User {
    constructor(
        public _id: string,
        public userName: string,
        public userPass: string,
        public userHashPass: string,
        public userPhone: string,
        public userAddress: string
    ) {}
}

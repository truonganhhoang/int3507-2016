import { Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable() 
export class AppGlobals {
// use this property for property binding
  public isUserLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public access_token: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public idFolder: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  setLoginStatus(isLoggedIn){
   this.isUserLoggedIn.next(isLoggedIn);
  }

  setAccessToken(str) {
    this.access_token.next(str);
  }

  setIdFolder(num) {
    this.idFolder.next(num);
  }
}
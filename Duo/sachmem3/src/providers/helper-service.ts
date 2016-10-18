import { Injectable } from '@angular/core';

@Injectable()
export class HelperService { 
  
  random(range): number {
    return Math.floor(Math.random() * range);
  }
  
}

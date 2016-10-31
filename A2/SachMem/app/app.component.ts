import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  
})
export class AppComponent { 
  titlePage: string = "Sách mềm - Phần mềm hỗ trợ sách giáo khoa";
  constructor(public router: Router) {}
}
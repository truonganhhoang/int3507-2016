import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-home',
    templateUrl: 'components/home/home.component.html',
})
export class HomeComponent {
    title: string = "Home page";

}
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'my-about',
    templateUrl: 'components/about/about.component.html',
})
export class AboutComponent {
    title: string = "About Us";
    param: string;

    constructor(private params: ActivatedRoute) {
        
    }
}
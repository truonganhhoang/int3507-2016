import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'listening',
    templateUrl: 'components/listening/listening.component.html'
})
export class ListeningComponent {
    name: string = "Listening";
    param: string;

    constructor() {
    }
}
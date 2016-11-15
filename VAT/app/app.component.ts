import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor() {}
}

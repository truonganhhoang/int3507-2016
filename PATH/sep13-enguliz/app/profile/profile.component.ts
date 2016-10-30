import {Component} from "@angular/core";
import {Router} from "@angular/router";

/**
 * Created by Thinking on 10/29/2016.
 */
@Component({
    templateUrl: 'app/profile/profile.component.html'
})
export class ProfileComponent {

    constructor(
        private router: Router) {}

    public msg_error = "";
    public msg_success = "";

}

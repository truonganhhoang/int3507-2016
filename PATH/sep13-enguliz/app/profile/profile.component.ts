import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";

/**
 * Created by Thinking on 10/29/2016.
 */
@Component({
    templateUrl: 'app/profile/profile.component.html',
    providers: [UserService]
})
export class ProfileComponent {

    constructor(
        private router: Router,
        userService: UserService) {}

    public msg_error = "";
    public msg_success = "";
    
    

}

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../user/user.service";
import {Exam} from "./exam.model";

/**
 * Created by Thinking on 10/29/2016.
 */
@Component({
    templateUrl: 'app/profile/profile.component.html',
    providers: [UserService]
})
export class ProfileComponent implements OnInit {

    private loggedIn = false;
    private exams:Exam[];


    constructor(
        private router: Router,
        private userService: UserService) {

        this.loggedIn = !!localStorage.getItem('auth_token');
        if(this.loggedIn) {

        } else {
            this.router.navigate(['/login']);
        }

    }

    public msg_error = "";
    public msg_success = "";


    isLoggedIn() {
        return this.loggedIn;
    }

    loadExamData() {
        this.userService.getExam(localStorage.getItem('auth_token'))
            .subscribe(
                data => {
                    this.exams = data;
                }, err => {
                    console.log(err);
                });
    }

    ngOnInit() {
        if(this.isLoggedIn()) {
            this.loadExamData();
        }
    }
}

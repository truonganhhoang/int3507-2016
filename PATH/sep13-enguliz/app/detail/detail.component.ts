/**
 * Created by Thinking on 09/24/2016.
 */
import {Component, OnInit} from "@angular/core";
import {DetailService} from "./detail.service";
import {Unit} from "../detail/unit.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Answer} from "./answer.model";
@Component({
    templateUrl: 'app/detail/detail.component.html',
    providers: [DetailService]
})

export class DetailComponent implements OnInit {

    public unit:Unit;
    public isTest = false;
    public isNotify = false;
    public checkAnswer = false;


    private loggedIn = false;
    public ticks = 999999999999;

    public userAns:{[key:string]:string;} = {};
    public timeCountdown: string;
    public userAnswer = [];

    public sub: Subcription;

    constructor(private router:Router,
                private route:ActivatedRoute,
                private service:DetailService) {
        this.loggedIn = !!localStorage.getItem('auth_token');
        if(this.loggedIn) {

        } else {
            this.router.navigate(['/login']);
        }
    }

    loadDetailsData(id) {
        this.service.getDetailsData(id)
            .subscribe(
                body => {
                    this.unit = body;
                },
                err => {
                    console.log(err);
                });
    }

    startTesting() {
        this.isTest = true;
        this.isNotify = false;
        let timer = Observable.timer(0, 999).take(this.unit.unitTime / 1000);
        this.sub = timer.subscribe(t=> {
            if (this.ticks <= 1) {
                this.isTest = false;
                this.isNotify = true;
            }
            this.ticks = this.unit.unitTime / 1000 - t;
            this.timeCountdown = this.convertTime(this.ticks);
        });
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    submitAns() {
        this.isTest = false;
        this.isNotify = true;

        let auth_token = localStorage.getItem('auth_token');
        var data = new UserAnswer(this.unit.unitTime / 1000 - this.ticks, this.userAnswer);

        this.service.submitAns(auth_token, this.unit._id, JSON.stringify(data))
                .subscribe(
                    data => {
                        this.sub.unsubscribe();
                    },
                    err => console.log(JSON.stringify(err))
                );

        this.ticks = 99999999999;
    }

    chooseAns(questionId, ansId) {
        this.userAnswer.push(new Answer(questionId, ansId));
    }

    convertTime(ticks) {
        var minute = 0;
        var second = 0;
        if(ticks >= 60 && ticks < 3600) {
            minute =  Math.floor(ticks/60);
            second = ticks % 60;
            return minute + " phút " + second + " giây";
        } else {
            return ticks + " giây";
        }
    }

    actionCheckAnswer() {
        this.checkAnswer = true;
    }

    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.loadDetailsData(id);
            });
    }
}

export class UserAnswer {
    constructor(
        public time:number,
        public answer: any[]
    ) {}
}
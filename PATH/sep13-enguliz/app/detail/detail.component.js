"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Thinking on 09/24/2016.
 */
const core_1 = require("@angular/core");
const detail_service_1 = require("./detail.service");
const router_1 = require("@angular/router");
const Rx_1 = require("rxjs/Rx");
const answer_model_1 = require("./answer.model");
let DetailComponent = class DetailComponent {
    constructor(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.isTest = false;
        this.isNotify = false;
        this.checkAnswer = false;
        this.loggedIn = false;
        this.ticks = 999999999999;
        this.userAns = {};
        this.userAnswer = [];
        this.correctNumber = 0;
        this.loggedIn = !!localStorage.getItem('auth_token');
        if (this.loggedIn) {
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    loadDetailsData(id) {
        this.service.getDetailsData(id)
            .subscribe(body => {
            this.unit = body;
        }, err => {
            console.log(err);
        });
    }
    startTesting() {
        this.isTest = true;
        this.isNotify = false;
        let timer = Rx_1.Observable.timer(0, 999).take(this.unit.unitTime / 1000);
        this.sub = timer.subscribe(t => {
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
            .subscribe(data => {
            this.sub.unsubscribe();
        }, err => console.log(JSON.stringify(err)));
        this.ticks = 99999999999;
    }
    chooseAns(questionId, ansId) {
        this.userAnswer.push(new answer_model_1.Answer(questionId, ansId));
    }
    convertTime(ticks) {
        var minute = 0;
        var second = 0;
        if (ticks >= 60 && ticks < 3600) {
            minute = Math.floor(ticks / 60);
            second = ticks % 60;
            return minute + " phút " + second + " giây";
        }
        else {
            return ticks + " giây";
        }
    }
    actionCheckAnswer() {
        this.checkAnswer = true;
        for (var i = 0; i < this.unit.question.length; i++) {
            this.correctNumber++;
        }
    }
    ngOnInit() {
        this.route.params
            .map(params => params['id'])
            .subscribe((id) => {
            this.loadDetailsData(id);
        });
    }
};
DetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/detail/detail.component.html',
        providers: [detail_service_1.DetailService]
    }), 
    __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, detail_service_1.DetailService])
], DetailComponent);
exports.DetailComponent = DetailComponent;
class UserAnswer {
    constructor(time, answer) {
        this.time = time;
        this.answer = answer;
    }
}
exports.UserAnswer = UserAnswer;
var _a;
//# sourceMappingURL=detail.component.js.map
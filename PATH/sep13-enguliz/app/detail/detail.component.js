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
var core_1 = require("@angular/core");
var detail_service_1 = require("./detail.service");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var answer_model_1 = require("./answer.model");
var DetailComponent = (function () {
    function DetailComponent(router, route, service) {
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
    DetailComponent.prototype.loadDetailsData = function (id) {
        var _this = this;
        this.service.getDetailsData(id)
            .subscribe(function (body) {
            _this.unit = body;
        }, function (err) {
            console.log(err);
        });
    };
    DetailComponent.prototype.startTesting = function () {
        var _this = this;
        this.isTest = true;
        this.isNotify = false;
        var timer = Rx_1.Observable.timer(0, 999).take(this.unit.unitTime / 1000);
        this.sub = timer.subscribe(function (t) {
            if (_this.ticks <= 1) {
                _this.isTest = false;
                _this.isNotify = true;
            }
            _this.ticks = _this.unit.unitTime / 1000 - t;
            _this.timeCountdown = _this.convertTime(_this.ticks);
        });
    };
    DetailComponent.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    DetailComponent.prototype.submitAns = function () {
        var _this = this;
        this.isTest = false;
        this.isNotify = true;
        var auth_token = localStorage.getItem('auth_token');
        var data = new UserAnswer(this.unit.unitTime / 1000 - this.ticks, this.userAnswer);
        this.service.submitAns(auth_token, this.unit._id, JSON.stringify(data))
            .subscribe(function (data) {
            _this.sub.unsubscribe();
        }, function (err) { return console.log(JSON.stringify(err)); });
        this.ticks = 99999999999;
    };
    DetailComponent.prototype.chooseAns = function (questionId, ansId) {
        this.userAnswer.push(new answer_model_1.Answer(questionId, ansId));
    };
    DetailComponent.prototype.convertTime = function (ticks) {
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
    };
    DetailComponent.prototype.actionCheckAnswer = function () {
        this.checkAnswer = true;
        for (var i = 0; i < this.unit.question.length; i++) {
            this.correctNumber++;
        }
    };
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.loadDetailsData(id);
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/detail/detail.component.html',
            providers: [detail_service_1.DetailService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, detail_service_1.DetailService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
var UserAnswer = (function () {
    function UserAnswer(time, answer) {
        this.time = time;
        this.answer = answer;
    }
    return UserAnswer;
}());
exports.UserAnswer = UserAnswer;
//# sourceMappingURL=detail.component.js.map
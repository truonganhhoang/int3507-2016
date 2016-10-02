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
var DetailComponent = (function () {
    function DetailComponent(route, service) {
        this.route = route;
        this.service = service;
        this.isTest = false;
        this.ticks = 0;
        this.isNotify = false;
        this.timeLimit = 60;
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
        var timer = Rx_1.Observable.timer(0, 999).take(11);
        timer.subscribe(function (t) {
            if (_this.ticks <= 1) {
                //TODO
                _this.isTest = false;
                _this.isNotify = true;
            }
            _this.ticks = _this.timeLimit - t;
        });
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
        __metadata('design:paramtypes', [router_1.ActivatedRoute, detail_service_1.DetailService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map
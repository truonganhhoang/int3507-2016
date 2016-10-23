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
 * Created by Thinking on 09/15/2016.
 */
var core_1 = require("@angular/core");
require('rxjs/Rx');
var listen_service_1 = require("./listen.service");
var TheoryListenComponent = (function () {
    // Constructor with injected service
    function TheoryListenComponent(service) {
        this.service = service;
    }
    TheoryListenComponent.prototype.loadListens = function () {
        var _this = this;
        this.service.getListens()
            .subscribe(function (data) { return _this.listens = data; }, function (err) {
            console.error(err);
        });
    };
    TheoryListenComponent.prototype.ngOnInit = function () {
        this.loadListens();
    };
    TheoryListenComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/theory/listen.component.html',
            providers: [listen_service_1.ListenService],
        }), 
        __metadata('design:paramtypes', [listen_service_1.ListenService])
    ], TheoryListenComponent);
    return TheoryListenComponent;
}());
exports.TheoryListenComponent = TheoryListenComponent;
//# sourceMappingURL=listen.component.js.map
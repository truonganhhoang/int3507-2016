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
const core_1 = require("@angular/core");
require('rxjs/Rx');
const listen_service_1 = require("./listen.service");
let TheoryListenComponent = class TheoryListenComponent {
    // Constructor with injected service
    constructor(service) {
        this.service = service;
    }
    loadListens() {
        this.service.getListens()
            .subscribe(data => this.listens = data, err => {
            console.error(err);
        });
    }
    ngOnInit() {
        this.loadListens();
    }
};
TheoryListenComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/theory/listen.component.html',
        providers: [listen_service_1.ListenService],
    }), 
    __metadata('design:paramtypes', [listen_service_1.ListenService])
], TheoryListenComponent);
exports.TheoryListenComponent = TheoryListenComponent;
//# sourceMappingURL=listen.component.js.map
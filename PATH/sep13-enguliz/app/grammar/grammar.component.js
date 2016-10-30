/**
 * Created by Thinking on 09/15/2016.
 */
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
var core_1 = require("@angular/core");
var grammar_service_1 = require("./grammar.service");
var router_1 = require("@angular/router");
var GrammarComponent = (function () {
    function GrammarComponent(service, router) {
        this.service = service;
        this.router = router;
        this.loggedIn = false;
        this.email = '';
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    GrammarComponent.prototype.loadGrammarDatas = function () {
        var _this = this;
        this.service.getGrammarData()
            .subscribe(function (body) { return _this.categories = body; }, function (err) {
            console.error(err);
        });
    };
    GrammarComponent.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    GrammarComponent.prototype.detailsAction = function (unitId) {
        if (this.loggedIn) {
            this.router.navigate(['/details', unitId]);
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    GrammarComponent.prototype.ngOnInit = function () {
        this.loadGrammarDatas();
    };
    GrammarComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/grammar/grammar.component.html',
            providers: [grammar_service_1.GrammarService]
        }), 
        __metadata('design:paramtypes', [grammar_service_1.GrammarService, router_1.Router])
    ], GrammarComponent);
    return GrammarComponent;
}());
exports.GrammarComponent = GrammarComponent;
//# sourceMappingURL=grammar.component.js.map
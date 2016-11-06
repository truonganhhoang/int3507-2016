System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var SecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SecondComponent = (function () {
                function SecondComponent(_routeParams) {
                    this._routeParams = _routeParams;
                    this.id = this._routeParams.get('id');
                }
                SecondComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h3>Bull</h3>\n    <img src=\"images/i3.jpg\"/>\n    <p>Description: Bull - Howdy Texas! I am a genuine Texas lady. I will adore you, follow you anywhere and shower you with happiness from my wiggy waggy tail. I really don't have any faults - I am a housebroken sweetheart. Now I do have a little friend that goes everywhere with me, so if you adopt me, she will come along too. It's never good manners to leave your bestie behind when you are out for an adventure. She is a typical Austin cowgirl - she loves to recycle stuff. Just because you throw it away, doesn't mean she won't go and get it. She likes to take the lead & she will shred your magazines and help you with any pesky papers you might need to get rid of. All in all, we are a fabulous find. If you like them sweet, gentle & housebroken and aren't looking for some tender young thing (we are 9 & 10), we're your forever girls. Check out Lola's video at https://youtu.be/8IBoWwHaMAc.</p>\n    \n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], SecondComponent);
                return SecondComponent;
            }());
            exports_1("SecondComponent", SecondComponent);
        }
    }
});
//# sourceMappingURL=second.component.js.map
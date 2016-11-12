System.register(['angular2/core', 'angular2/router', './first.component', './second.component'], function(exports_1, context_1) {
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
    var core_1, router_1, first_component_1, second_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (first_component_1_1) {
                first_component_1 = first_component_1_1;
            },
            function (second_component_1_1) {
                second_component_1 = second_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <h1 style=\"text-align: center\"></h1>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\"></h3>\n          <img style=\"width: 100%\"src=\"i2.jpg\"/>\n        </div>\n        <div class=\"panel-body\">\n          <ul class=\"nav nav-tabs\">\n            <li role=\"presentation\">\n              <a [routerLink]=\"['Route1']\">Home</a>\n            </li>\n            <li role=\"presentation\">\n              <a [routerLink]=\"['Route2', {id: 1}]\">Bull</a>\n            </li>\n          </ul>\n\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n      ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/route1', name: 'Route1', component: first_component_1.FirstComponent },
                        { path: '/route2/:id', name: 'Route2', component: second_component_1.SecondComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
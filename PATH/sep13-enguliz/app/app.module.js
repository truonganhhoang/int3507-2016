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
 * Created by Thinking on 09/13/2016.
 */
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const forms_1 = require("@angular/forms");
const app_routing_1 = require("./app.routing");
const login_component_1 = require("./login/login.component");
const home_component_1 = require("./home/home.component");
const listen_component_1 = require("./theory/listen.component");
const theory_component_1 = require("./theory/theory.component");
const http_1 = require("@angular/http");
const test_component_1 = require("./test/test.component");
const test_component_2 = require("./test/read/test.component");
const detail_component_1 = require("./detail/detail.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent,
            theory_component_1.TheoryComponent,
            listen_component_1.TheoryListenComponent,
            test_component_1.TestComponent,
            test_component_2.TestReadCompoent,
            detail_component_1.DetailComponent
        ],
        providers: [
            app_routing_1.appRoutingProvider
        ],
        bootstrap: [
            app_component_1.AppComponent,
        ]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
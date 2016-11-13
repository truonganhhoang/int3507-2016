"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var listen_component_1 = require("./theory/listen.component");
var theory_component_1 = require("./theory/theory.component");
var test_component_1 = require("./test/test.component");
var test_component_2 = require("./test/read/test.component");
var detail_component_1 = require("./detail/detail.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'theory', component: theory_component_1.TheoryComponent,
        children: [
            { path: '', redirectTo: 'listen', pathMatch: 'full' },
            { path: 'listen', component: listen_component_1.TheoryListenComponent }
        ]
    },
    { path: 'test', component: test_component_1.TestComponent, children: [
            { path: 'read', component: test_component_2.TestReadCompoent }
        ]
    },
    { path: 'detail/:id', component: detail_component_1.DetailComponent }
];
exports.appRoutingProvider = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
"use strict";
const router_1 = require("@angular/router");
const login_component_1 = require("./login/login.component");
const home_component_1 = require("./home/home.component");
const listen_component_1 = require("./theory/listen.component");
const theory_component_1 = require("./theory/theory.component");
const test_component_1 = require("./test/test.component");
const test_component_2 = require("./test/read/test.component");
const detail_component_1 = require("./detail/detail.component");
const appRoutes = [
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
    { path: 'details/:id', component: detail_component_1.DetailComponent }
];
exports.appRoutingProvider = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
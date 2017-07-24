"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var accountdetails_component_1 = require("./accountdetails.component");
// noinspection TypeScriptValidateTypes
exports.routes = [
    {
        path: '',
        component: accountdetails_component_1.AccountDetailsComponent,
        children: [],
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=accountdetails.routing.js.map
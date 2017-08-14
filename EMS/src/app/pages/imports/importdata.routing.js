"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var importdata_component_1 = require("./importdata.component");
// noinspection TypeScriptValidateTypes
exports.routes = [
    {
        path: '',
        component: importdata_component_1.ImportDataComponent,
        children: [],
    },
];
exports.routing = router_1.RouterModule.forChild(exports.routes);
//# sourceMappingURL=importdata.routing.js.map
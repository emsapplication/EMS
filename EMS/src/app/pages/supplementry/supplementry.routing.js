"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var supplementry_component_1 = require("./supplementry.component");
//import { Inputs } from './components/inputs/inputs.component';
//import { Layouts } from './components/layouts/layouts.component';
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: 'supplementary',
        component: supplementry_component_1.SupplementryComponent,
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=supplementry.routing.js.map
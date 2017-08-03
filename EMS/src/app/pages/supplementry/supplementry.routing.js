"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var supplementry_component_1 = require("./supplementry.component");
var location_component_1 = require("./components/location/location.component");
//import { Layouts } from './components/layouts/layouts.component';
var addLocation_component_1 = require("./components/location/components/addLocation/addLocation.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: supplementry_component_1.Supplementry,
        children: [
            { path: 'locationDetails', component: location_component_1.Location },
            { path: 'location', component: addLocation_component_1.AddLocation }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=supplementry.routing.js.map
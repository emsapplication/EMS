"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var supplementry_component_1 = require("./supplementry.component");
var location_component_1 = require("./components/location/location.component");
var addLocation_component_1 = require("./components/location/components/addLocation/addLocation.component");
var designation_component_1 = require("./components/designation/designation.component");
var addDesignation_component_1 = require("./components/designation/components/addDesignation/addDesignation.component");
//import { Layouts } from './components/layouts/layouts.component';
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: supplementry_component_1.Supplementry,
        children: [
            { path: 'locationDetails', component: location_component_1.Location },
            { path: 'location', component: addLocation_component_1.AddLocation },
            { path: 'designationDetails', component: designation_component_1.Designation },
            { path: 'designation', component: addDesignation_component_1.AddDesignation }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=supplementry.routing.js.map
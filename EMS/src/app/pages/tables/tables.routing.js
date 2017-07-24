"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var tables_component_1 = require("./tables.component");
var basicTables_component_1 = require("./components/basicTables/basicTables.component");
var smartTables_component_1 = require("./components/smartTables/smartTables.component");
var dataTables_component_1 = require("./components/dataTables/dataTables.component");
var hotTables_component_1 = require("./components/hotTables/hotTables.component");
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: tables_component_1.Tables,
        children: [
            { path: 'basictables', component: basicTables_component_1.BasicTables },
            { path: 'smarttables', component: smartTables_component_1.SmartTables },
            { path: 'datatables', component: dataTables_component_1.DataTables },
            { path: 'hottables', component: hotTables_component_1.HotTablesComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=tables.routing.js.map
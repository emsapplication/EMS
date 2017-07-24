"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var ng2_smart_table_1 = require("ng2-smart-table");
var angular2_datatable_1 = require("angular2-datatable");
var http_1 = require("@angular/http");
var data_filter_pipe_1 = require("./components/dataTables/data-filter.pipe");
var ng2_handsontable_1 = require("ng2-handsontable");
var tables_routing_1 = require("./tables.routing");
var tables_component_1 = require("./tables.component");
var basicTables_component_1 = require("./components/basicTables/basicTables.component");
var basicTables_service_1 = require("./components/basicTables/basicTables.service");
var responsiveTable_1 = require("./components/basicTables/components/responsiveTable");
var stripedTable_1 = require("./components/basicTables/components/stripedTable");
var borderedTable_1 = require("./components/basicTables/components/borderedTable");
var hoverTable_1 = require("./components/basicTables/components/hoverTable");
var condensedTable_1 = require("./components/basicTables/components/condensedTable");
var contextualTable_1 = require("./components/basicTables/components/contextualTable");
var smartTables_component_1 = require("./components/smartTables/smartTables.component");
var smartTables_service_1 = require("./components/smartTables/smartTables.service");
var dataTables_component_1 = require("./components/dataTables/dataTables.component");
var dataTables_service_1 = require("./components/dataTables/dataTables.service");
var hotTables_component_1 = require("./components/hotTables/hotTables.component");
var handsontable_section_1 = require("./components/hotTables/handsontable-section");
var basic_demo_1 = require("./components/hotTables/handsontable/basic-demo");
var sheet_demo_1 = require("./components/hotTables/handsontable/sheet-demo");
var finance_demo_1 = require("./components/hotTables/handsontable/finance-demo");
var science_demo_1 = require("./components/hotTables/handsontable/science-demo");
var sport_demo_1 = require("./components/hotTables/handsontable/sport-demo");
var advanced_demo_1 = require("./components/hotTables/handsontable/advanced-demo");
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            tables_routing_1.routing,
            ng2_smart_table_1.Ng2SmartTableModule,
            angular2_datatable_1.DataTableModule,
            http_1.HttpModule,
            ng2_handsontable_1.HotTableModule
        ],
        declarations: [
            tables_component_1.Tables,
            basicTables_component_1.BasicTables,
            hoverTable_1.HoverTable,
            borderedTable_1.BorderedTable,
            condensedTable_1.CondensedTable,
            stripedTable_1.StripedTable,
            contextualTable_1.ContextualTable,
            responsiveTable_1.ResponsiveTable,
            smartTables_component_1.SmartTables,
            dataTables_component_1.DataTables,
            data_filter_pipe_1.DataFilterPipe,
            hotTables_component_1.HotTablesComponent,
            handsontable_section_1.HandsontableSectionComponent,
            basic_demo_1.BasicDemoComponent,
            advanced_demo_1.AdvancedDemoComponent,
            finance_demo_1.FinanceDemoComponent,
            science_demo_1.ScienceDemoComponent,
            sport_demo_1.SportDemoComponent,
            sheet_demo_1.SheetDemoComponent
        ],
        providers: [
            basicTables_service_1.BasicTablesService,
            smartTables_service_1.SmartTablesService,
            dataTables_service_1.DataTablesService
        ]
    })
], TablesModule);
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map
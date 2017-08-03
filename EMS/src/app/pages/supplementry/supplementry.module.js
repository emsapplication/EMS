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
var app_translation_module_1 = require("../../app.translation.module");
var nga_module_1 = require("../../theme/nga.module");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_smart_table_1 = require("ng2-smart-table");
var supplementry_routing_1 = require("./supplementry.routing");
var supplementry_component_1 = require("./supplementry.component");
var location_1 = require("./components/location");
var addLocation_component_1 = require("./components/location/components/addLocation/addLocation.component");
var main_1 = require("ag-grid-angular/main");
var smartTables_component_1 = require("../../pages/tables/components/smartTables/smartTables.component");
var smartTables_service_1 = require("../../pages/tables/components/smartTables/smartTables.service");
//import { StandardInputs } from './components/location/components/standardInputs';
//import { ValidationInputs } from './components/location/components/validationInputs';
//import { GroupInputs } from './components/location/components/groupInputs';
//import { CheckboxInputs } from './components/location/components/checkboxInputs';
//import { Rating } from './components/location/components/ratinginputs';
//import { SelectInputs } from './components/location/components/selectInputs';
//import { InlineForm } from './components/layouts/components/inlineForm';
//import { BlockForm } from './components/layouts/components/blockForm';
//import { HorizontalForm } from './components/layouts/components/horizontalForm';
//import { BasicForm } from './components/layouts/components/basicForm';
//import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm';
var SupplementryModule = (function () {
    function SupplementryModule() {
    }
    return SupplementryModule;
}());
SupplementryModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            app_translation_module_1.AppTranslationModule,
            nga_module_1.NgaModule,
            ng_bootstrap_1.NgbRatingModule,
            supplementry_routing_1.routing,
            ng2_smart_table_1.Ng2SmartTableModule,
            main_1.AgGridModule.withComponents([])
        ],
        declarations: [
            location_1.Location,
            supplementry_component_1.Supplementry,
            addLocation_component_1.AddLocation,
            smartTables_component_1.SmartTables
            //StandardInputs,
            //ValidationInputs,
            //GroupInputs,
            //CheckboxInputs,
            //Rating,
            //SelectInputs,
            //InlineForm,
            //BlockForm,
            //HorizontalForm,
            //BasicForm,
            //WithoutLabelsForm
        ],
        providers: [
            smartTables_service_1.SmartTablesService
        ]
    })
], SupplementryModule);
exports.SupplementryModule = SupplementryModule;
//# sourceMappingURL=supplementry.module.js.map
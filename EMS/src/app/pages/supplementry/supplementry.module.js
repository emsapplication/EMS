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
//import { routing } from './supplementry.routing';
var supplementry_component_1 = require("./supplementry.component");
var checkboxInputs_1 = require("./Components/location/components/checkboxInputs");
var standardInputs_1 = require("./Components/location/components/standardInputs");
var FormsModule = (function () {
    function FormsModule() {
    }
    return FormsModule;
}());
FormsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            app_translation_module_1.AppTranslationModule,
            nga_module_1.NgaModule,
            ng_bootstrap_1.NgbRatingModule,
        ],
        declarations: [
            //Layouts,
            //Inputs,
            supplementry_component_1.SupplementryComponent,
            standardInputs_1.StandardInputs,
            //ValidationInputs,
            // GroupInputs,
            checkboxInputs_1.CheckboxInputs,
        ]
    })
], FormsModule);
exports.FormsModule = FormsModule;
//# sourceMappingURL=supplementry.module.js.map
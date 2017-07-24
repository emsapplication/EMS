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
var accountdetails_component_1 = require("./accountdetails.component");
var accountdetails_routing_1 = require("./accountdetails.routing");
var AccountDetailsModule = (function () {
    function AccountDetailsModule() {
    }
    return AccountDetailsModule;
}());
AccountDetailsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            accountdetails_routing_1.routing,
        ],
        declarations: [
            accountdetails_component_1.AccountDetailsComponent,
        ],
    })
], AccountDetailsModule);
exports.AccountDetailsModule = AccountDetailsModule;
//# sourceMappingURL=accountdetails.module.js.map
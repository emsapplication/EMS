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
var importdata_component_1 = require("./importdata.component");
var importdata_routing_1 = require("./importdata.routing");
var ng2_file_upload_1 = require("ng2-file-upload");
var xlsx_file_upload_component_1 = require("./components/xlsx-file-upload/xlsx-file-upload.component");
var ImportDataModule = (function () {
    function ImportDataModule() {
    }
    return ImportDataModule;
}());
ImportDataModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            ng2_file_upload_1.FileUploadModule,
            importdata_routing_1.routing
            //XlsxFileUploadComponent
        ],
        declarations: [
            importdata_component_1.ImportDataComponent,
            xlsx_file_upload_component_1.XlsxFileUploadComponent,
        ],
    })
], ImportDataModule);
exports.ImportDataModule = ImportDataModule;
//# sourceMappingURL=importdata.module.js.map
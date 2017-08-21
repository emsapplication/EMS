"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var EMSApi_1 = require("../../common/EMSApi");
var ImportDataComponent = (function () {
    function ImportDataComponent(_EMSApi) {
        this._EMSApi = _EMSApi;
        this.uploaderContent = new rxjs_1.BehaviorSubject('please drop file in');
    }
    ImportDataComponent.prototype.xlsxUploaded = function (result) {
        // this.uploaderContent.next(JSON.stringify(result));
        console.log("save");
        this._EMSApi.createService("http://localhost/ems.apiservice/api/ImportResourceDetail/", JSON.stringify(result)).subscribe(function (result) {
            if (result === 1) {
                //this.designationModel.DesignationName = "";
                //this.designationModel.ShortDesignation = "";
                //this.invalidData = "";
                //  this.successMessage = "Record Saved Successfully";
                //this.isShowSucess = true;
                //this.isShowError = false;
            }
        }, function (error) { return console.log(error); });
        // console.log(JSON.stringify(result));
    };
    return ImportDataComponent;
}());
ImportDataComponent = __decorate([
    core_1.Component({
        selector: 'importdata',
        styleUrls: ['./importdata.scss'],
        templateUrl: './importdata.html',
    }),
    __metadata("design:paramtypes", [EMSApi_1.EMSApi])
], ImportDataComponent);
exports.ImportDataComponent = ImportDataComponent;
//# sourceMappingURL=importdata.component.js.map
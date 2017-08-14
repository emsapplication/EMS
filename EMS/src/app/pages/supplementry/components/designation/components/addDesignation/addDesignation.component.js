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
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var app_service_1 = require("../../../../../../app.service");
var EMSApi_1 = require("../../../../../../common/EMSApi");
var designation_1 = require("../../../../../../common/types/designation");
var forms_1 = require("@angular/forms");
var AddDesignation = (function () {
    function AddDesignation(router, route, _state, _EMSApi) {
        this.router = router;
        this.route = route;
        this._state = _state;
        this._EMSApi = _EMSApi;
        this.designationModel = new designation_1.Designation();
        this.isShowSucess = false;
        this.isShowError = false;
        this.designationForm = new forms_1.FormGroup({
            name: new forms_1.FormControl()
        });
    }
    AddDesignation.prototype.ngOnInit = function () {
        var _this = this;
        this.addDesignation = "Add Designation";
        this._EMSApi.getServiceWithId("http://localhost/EMS.ApiService/api/designation", this._state.get("DesignationId")).subscribe(function (result) {
            _this.addDesignation = "Update Designation";
            _this.designationModel = result,
                _this._state.remove("DesignationId");
        }, function (error) { return console.log(error); });
        //alert(this._state.get("LocationId"));
        //let id = this.route.snapshot.paramMap.get('id');
    };
    AddDesignation.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    AddDesignation.prototype.navigateToLocationList = function () {
        this.router.navigate(['..//designationList'], { relativeTo: this.route });
    };
    AddDesignation.prototype.Savedesignation = function () {
        var _this = this;
        if (this.addDesignation === "Update Designation" && this.designationModel.DesignationId) {
            console.log("update");
            console.log(this.designationModel);
            this._EMSApi.updateService("http://localhost/EMS.ApiService/api/designation", this.designationModel).subscribe(function (result) {
                if (result === 1) {
                    _this.isShowSucess = true;
                    _this.isShowError = false;
                    _this.successMessage = "Record Updated Successfully";
                }
            }, function (error) { return console.log(error); });
        }
        else if (this.addDesignation === "Add Designation") {
            console.log("save");
            this._EMSApi.createService("http://localhost/EMS.ApiService/api/designation", this.designationModel).subscribe(function (result) {
                if (result === 1) {
                    _this.designationModel.DesignationName = "";
                    _this.designationModel.ShortDesignation = "";
                    _this.invalidData = "";
                    _this.successMessage = "Record Saved Successfully";
                    _this.isShowSucess = true;
                    _this.isShowError = false;
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.successMessage = "";
            this.isShowError = true;
            this.invalidData = "Invalid Data";
        }
    };
    return AddDesignation;
}());
AddDesignation = __decorate([
    core_1.Component({
        selector: 'addDesignation',
        templateUrl: './addDesignation.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        app_service_1.AppState,
        EMSApi_1.EMSApi])
], AddDesignation);
exports.AddDesignation = AddDesignation;
//# sourceMappingURL=addDesignation.component.js.map
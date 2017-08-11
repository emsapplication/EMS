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
var location_1 = require("../../../../../../common/types/location");
var forms_1 = require("@angular/forms");
var AddLocation = (function () {
    function AddLocation(router, route, _state, _EMSApi) {
        this.router = router;
        this.route = route;
        this._state = _state;
        this._EMSApi = _EMSApi;
        this.locationModel = new location_1.Location();
        this.locationForm = new forms_1.FormGroup({
            name: new forms_1.FormControl()
        });
    }
    AddLocation.prototype.ngOnInit = function () {
        var _this = this;
        this.addLocation = "Add Location";
        this._EMSApi.getServiceWithId("http://localhost/EMS.ApiService/api/location", this._state.get("LocationId")).subscribe(function (result) {
            _this.addLocation = "Update Location";
            _this.locationModel = result,
                console.log(_this.locationModel.LocationId);
            console.log(_this.locationModel.Description);
            _this._state.remove("LocationId");
        }, function (error) { return console.log(error); });
        //alert(this._state.get("LocationId"));
        //let id = this.route.snapshot.paramMap.get('id');
    };
    AddLocation.prototype.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    AddLocation.prototype.navigateToLocationList = function () {
        this.router.navigate(['..//locationList'], { relativeTo: this.route });
    };
    AddLocation.prototype.SaveLocation = function () {
        var _this = this;
        if (this.addLocation === "Update Location" && this.locationModel.LocationId) {
            console.log("update");
            console.log(this.locationModel);
            this._EMSApi.updateService("http://localhost/EMS.ApiService/api/location", this.locationModel).subscribe(function (result) {
                if (result === 1) {
                    _this.locationModel.LocationId = null;
                    _this.locationModel.Location = "";
                    _this.locationModel.Description = "";
                    _this.successMessage = "Record Saved Successfully";
                }
            }, function (error) { return console.log(error); });
        }
        else if (this.addLocation === "Add Location") {
            console.log("save");
            this._EMSApi.createService("http://localhost/EMS.ApiService/api/location", this.locationModel).subscribe(function (result) {
                if (result === 1) {
                    _this.locationModel.Location = "";
                    _this.locationModel.Description = "";
                    _this.invalidData = "";
                    _this.successMessage = "Record Saved Successfully";
                }
            }, function (error) { return console.log(error); });
        }
        else {
            this.successMessage = "";
            this.invalidData = "Invalid Data";
        }
    };
    return AddLocation;
}());
AddLocation = __decorate([
    core_1.Component({
        selector: 'addLocation',
        templateUrl: './addLocation.html',
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        app_service_1.AppState,
        EMSApi_1.EMSApi])
], AddLocation);
exports.AddLocation = AddLocation;
//# sourceMappingURL=addLocation.component.js.map
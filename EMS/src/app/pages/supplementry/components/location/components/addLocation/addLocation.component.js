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
var AddLocation = (function () {
    function AddLocation(router, route, _state) {
        this.router = router;
        this.route = route;
        this._state = _state;
    }
    AddLocation.prototype.ngOnInit = function () {
        this._state.get("LocationId");
        alert(this._state.get("LocationId"));
        var id = this.route.snapshot.paramMap.get('id');
    };
    AddLocation.prototype.navigateToLocationList = function () {
        this.router.navigate(['..//locationList'], { relativeTo: this.route });
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
        app_service_1.AppState])
], AddLocation);
exports.AddLocation = AddLocation;
//# sourceMappingURL=addLocation.component.js.map
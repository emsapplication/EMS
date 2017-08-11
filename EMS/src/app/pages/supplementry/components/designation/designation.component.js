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
var ng2_smart_table_1 = require("ng2-smart-table");
var EMSApi_1 = require("../../../../common/EMSApi");
var app_service_1 = require("../../../../app.service");
var Designation = (function () {
    function Designation(router, route, _EMSApi, _state) {
        this.router = router;
        this.route = route;
        this._EMSApi = _EMSApi;
        this._state = _state;
        this.query = '';
        this.apiLink = 'http://localhost/EMS.ApiService/api/designation';
        this.settings = {
            mode: 'external',
            hideSubHeader: true,
            pager: {
                display: true,
                perPage: 10,
            },
            edit: {
                editButtonContent: '<i class="ion-edit"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            columns: {
                DesignationName: {
                    title: 'Designation Name',
                    type: 'string'
                },
                ShortDesignation: {
                    title: 'Short Designation',
                    type: 'string'
                }
            }
        };
        this.source = new ng2_smart_table_1.LocalDataSource();
    }
    Designation.prototype.ngOnInit = function () {
        this.bindData();
    };
    Designation.prototype.onDeleteConfirm = function (event) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete?')) {
            //console.log(event.data.LocationId);
            this._EMSApi.deleteServiceWithId(this.apiLink, event.data.DesignationId).subscribe(function (result) { return _this.bindData(); }, function (error) { return _this.message = error; });
        }
        else {
            event.confirm.reject();
        }
    };
    Designation.prototype.onSave = function (event) {
        //this.router.navigate(['..//addLocation', event.data.id]);
        //this.router.navigate(['..//addLocation'], { relativeTo: this.route });
        this._state.set("DesignationId", event.data.DesignationId);
        this.router.navigate(['..//designation'], { relativeTo: this.route });
        console.log("data", event.data.DesignationId);
    };
    //onDelete(event) {
    //console.log('on delete');
    // delete data from server
    //this.delete(event.data).then(result => {
    //if (result === true) {
    // if data successfully deleted from server, remove data from local table too
    //this.source.remove(event.data);
    //}
    //}).catch(err => console.log(err));
    //}
    Designation.prototype.navgateToAddLocation = function () {
        this.router.navigate(['..//designation'], { relativeTo: this.route });
    };
    Designation.prototype.bindData = function () {
        var _this = this;
        this._EMSApi.getService("http://localhost/EMS.ApiService/api/designation").subscribe(function (result) { return _this.source.load(result); }, function (error) { return _this.message = error; });
    };
    return Designation;
}());
Designation = __decorate([
    core_1.Component({
        selector: 'inputs',
        templateUrl: './inputs.html',
        styleUrls: ['./smartTables.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        EMSApi_1.EMSApi,
        app_service_1.AppState])
], Designation);
exports.Designation = Designation;
//# sourceMappingURL=designation.component.js.map
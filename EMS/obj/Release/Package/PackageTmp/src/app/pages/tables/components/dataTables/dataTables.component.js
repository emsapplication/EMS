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
var dataTables_service_1 = require("./dataTables.service");
var DataTables = (function () {
    function DataTables(service) {
        var _this = this;
        this.service = service;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "email";
        this.sortOrder = "asc";
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
        this.service.getData().then(function (data) {
            _this.data = data;
        });
    }
    DataTables.prototype.toInt = function (num) {
        return +num;
    };
    return DataTables;
}());
DataTables = __decorate([
    core_1.Component({
        selector: 'data-tables',
        templateUrl: './dataTables.html',
        styleUrls: ['./dataTables.scss']
    }),
    __metadata("design:paramtypes", [dataTables_service_1.DataTablesService])
], DataTables);
exports.DataTables = DataTables;
//# sourceMappingURL=dataTables.component.js.map
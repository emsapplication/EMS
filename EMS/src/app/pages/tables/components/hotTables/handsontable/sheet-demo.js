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
var Handsontable = require("handsontable/dist/handsontable.full.js");
var SheetDemoComponent = (function () {
    function SheetDemoComponent() {
        this.data = Handsontable.helper['createSpreadsheetData'](100, 12); // tslint:disable-line:no-string-literal
        this.options = {
            height: 396,
            colHeaders: true,
            rowHeaders: true,
            stretchH: 'all',
            columnSorting: true,
            contextMenu: true
        };
    }
    return SheetDemoComponent;
}());
SheetDemoComponent = __decorate([
    core_1.Component({
        selector: 'sheet-demo',
        templateUrl: './sheet-demo.html'
    }),
    __metadata("design:paramtypes", [])
], SheetDemoComponent);
exports.SheetDemoComponent = SheetDemoComponent;
//# sourceMappingURL=sheet-demo.js.map
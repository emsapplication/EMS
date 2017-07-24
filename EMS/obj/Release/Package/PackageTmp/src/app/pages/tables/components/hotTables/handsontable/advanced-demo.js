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
var data_1 = require("./data");
var AdvancedDemoComponent = (function () {
    function AdvancedDemoComponent() {
        this.data = data_1.getAdvancedData();
        this.colHeaders = ['Country', 'Level', 'Units', 'As Of', '1Y Chg', '5Y Ago', '10Y Ago', '25Y Ago'];
        this.columns = [
            { data: 0, type: 'text' },
            { data: 1, type: 'numeric', format: '0,0.00[0000]' },
            { data: 2, type: 'text' },
            { data: 3, type: 'numeric', format: '0' },
            { data: 4, type: 'numeric', format: '0.00%',
                renderer: function percentRenderer(instance, td, row, col, prop, value, cellProperties) {
                    Handsontable.renderers.NumericRenderer.apply(this, arguments);
                    td.style.color = 'white';
                } },
            { data: 5, type: 'numeric', format: '0,0.00[0000]' },
            { data: 6, type: 'numeric', format: '0,0.00[0000]' }
        ];
        this.options = {
            height: 396,
            rowHeaders: true,
            stretchH: 'all',
            columnSorting: true,
            contextMenu: true,
            className: 'htCenter htMiddle',
            readOnly: true
        };
    }
    return AdvancedDemoComponent;
}());
AdvancedDemoComponent = __decorate([
    core_1.Component({
        selector: 'advanced-demo',
        templateUrl: './advanced-demo.html'
    }),
    __metadata("design:paramtypes", [])
], AdvancedDemoComponent);
exports.AdvancedDemoComponent = AdvancedDemoComponent;
//# sourceMappingURL=advanced-demo.js.map
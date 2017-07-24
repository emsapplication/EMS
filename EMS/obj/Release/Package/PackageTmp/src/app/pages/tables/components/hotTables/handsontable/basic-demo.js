"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var BasicDemoComponent = (function () {
    function BasicDemoComponent() {
        this.data = data_1.genData(10);
        this.colHeaders = ['ID', 'First Name', 'Last Name', 'Address',
            'Favorite food', 'Price', 'Is active'];
        this.columns = [
            {
                data: 'id'
            },
            {
                data: 'name.first',
                renderer: 'text',
                readOnly: true
            },
            {
                data: 'name.last',
                readOnly: true
            },
            {
                data: 'address'
            },
            {
                data: 'product.description',
                source: 'product.options',
                optionField: 'description',
                type: 'autocomplete',
                strict: false,
                visibleRows: 4
            },
            {
                data: 'price',
                type: 'numeric',
                format: '$ 0,0.00'
            },
            {
                data: 'isActive',
                type: 'checkbox',
                checkedTemplate: 'Yes',
                uncheckedTemplate: 'No'
            }
        ];
        this.colWidths = [null, null, null, null, null, null, 30];
        this.options = {
            stretchH: 'all',
            columnSorting: true,
            contextMenu: [
                'row_above', 'row_below', 'remove_row'
            ]
        };
    }
    BasicDemoComponent.prototype.afterChange = function (e) {
        console.log(e);
    };
    BasicDemoComponent.prototype.afterOnCellMouseDown = function (e) {
        console.log(e);
    };
    return BasicDemoComponent;
}());
BasicDemoComponent = __decorate([
    core_1.Component({
        selector: 'basic-demo',
        templateUrl: './basic-demo.html'
    })
], BasicDemoComponent);
exports.BasicDemoComponent = BasicDemoComponent;
//# sourceMappingURL=basic-demo.js.map
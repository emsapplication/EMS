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
var science_demo_service_1 = require("./science-demo.service");
var science_demo_service_2 = require("./science-demo.service");
var heatmapScale = chroma.scale(['#17F556', '#ED6D47']);
var heatmap = [];
function heatmapRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    if (heatmap[col]) {
        td.style.backgroundColor = heatmapScale(science_demo_service_2.point(heatmap[col].min, heatmap[col].max, parseFloat(value))).hex();
        td.style.textAlign = 'right';
        td.style.fontWeight = 'bold';
    }
}
var ScienceDemoComponent = (function () {
    function ScienceDemoComponent() {
        this.data = data_1.getScienceData();
        this.options = {
            height: 600,
            colHeaders: ['Line chart', 'Frequency', 'Average age', 'Frequency', 'Average age'],
            rowHeaders: true,
            stretchH: 'all',
            columnSorting: true,
            columns: [
                { data: 0, renderer: 'html' },
                { data: 1, type: 'numeric', format: '0[.]000000000000000' },
                { data: 2, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer },
                { data: 3, type: 'numeric', format: '0[.]000000000000000' },
                { data: 4, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer }
            ],
            afterLoadData: science_demo_service_1.updateHeatmap,
            beforeChangeRender: science_demo_service_1.updateHeatmap,
            mergeCells: [
                { row: 0, col: 0, rowspan: 20, colspan: 1 }
            ]
        };
    }
    return ScienceDemoComponent;
}());
ScienceDemoComponent = __decorate([
    core_1.Component({
        selector: 'science-demo',
        templateUrl: './science-demo.html'
    }),
    __metadata("design:paramtypes", [])
], ScienceDemoComponent);
exports.ScienceDemoComponent = ScienceDemoComponent;
//# sourceMappingURL=science-demo.js.map
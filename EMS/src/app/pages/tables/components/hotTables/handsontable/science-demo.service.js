"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var heatmap = [];
function updateHeatmap(change, source) {
    if (change && change.length) {
        heatmap[change[0][1]] = generateHeatmapData(this, change[0][1]);
    }
    else {
        heatmap = [];
        for (var i = 1, colCount = this.countCols(); i < colCount; i++) {
            heatmap[i] = generateHeatmapData(this, i);
        }
    }
}
exports.updateHeatmap = updateHeatmap;
function point(min, max, value) {
    return (value - min) / (max - min);
}
exports.point = point;
function generateHeatmapData(context, colId) {
    var values = context.getDataAtCol(colId);
    return {
        min: Math.min.apply(null, values),
        max: Math.max.apply(null, values)
    };
}
exports.generateHeatmapData = generateHeatmapData;
//# sourceMappingURL=science-demo.service.js.map
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
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var SlimComponent = (function () {
    function SlimComponent(slimLoader) {
        this.slimLoader = slimLoader;
    }
    SlimComponent.prototype.setProgres30 = function () {
        this.slimLoader.progress = 30;
    };
    SlimComponent.prototype.startProgress = function () {
        this.slimLoader.start(function () {
            console.log('Loading complete');
        });
    };
    SlimComponent.prototype.completeProgress = function () {
        this.slimLoader.complete();
    };
    SlimComponent.prototype.stopProgress = function () {
        this.slimLoader.stop();
    };
    SlimComponent.prototype.resetProgress = function () {
        this.slimLoader.reset();
    };
    SlimComponent.prototype.incrementProgress = function () {
        this.slimLoader.progress++;
    };
    SlimComponent.prototype.changeProgressTo4px = function () {
        this.slimLoader.height = '4px';
    };
    SlimComponent.prototype.changeProgressTo2px = function () {
        this.slimLoader.height = '2px';
    };
    SlimComponent.prototype.changeProgressToWhite = function () {
        this.slimLoader.color = 'white';
    };
    SlimComponent.prototype.changeProgressToGreen = function () {
        this.slimLoader.color = 'green';
    };
    return SlimComponent;
}());
SlimComponent = __decorate([
    core_1.Component({
        selector: 'slim',
        styleUrls: ['./slim.scss'],
        templateUrl: './slim.html'
    }),
    __metadata("design:paramtypes", [ng2_slim_loading_bar_1.SlimLoadingBarService])
], SlimComponent);
exports.SlimComponent = SlimComponent;
//# sourceMappingURL=slim.component.js.map
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
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var DefaultModal = (function () {
    function DefaultModal(activeModal) {
        this.activeModal = activeModal;
        this.modalContent = "Lorem ipsum dolor sit amet,\n   consectetuer adipiscing elit, sed diam nonummy\n   nibh euismod tincidunt ut laoreet dolore magna aliquam\n   erat volutpat. Ut wisi enim ad minim veniam, quis\n   nostrud exerci tation ullamcorper suscipit lobortis\n   nisl ut aliquip ex ea commodo consequat.";
    }
    DefaultModal.prototype.ngOnInit = function () { };
    DefaultModal.prototype.closeModal = function () {
        this.activeModal.close();
    };
    return DefaultModal;
}());
DefaultModal = __decorate([
    core_1.Component({
        selector: 'add-service-modal',
        styleUrls: [('./default-modal.component.scss')],
        templateUrl: './default-modal.component.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbActiveModal])
], DefaultModal);
exports.DefaultModal = DefaultModal;
//# sourceMappingURL=default-modal.component.js.map
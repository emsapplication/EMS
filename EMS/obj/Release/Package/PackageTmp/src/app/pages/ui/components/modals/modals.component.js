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
var default_modal_component_1 = require("./default-modal/default-modal.component");
var Modals = (function () {
    function Modals(modalService) {
        this.modalService = modalService;
    }
    Modals.prototype.lgModalShow = function () {
        var activeModal = this.modalService.open(default_modal_component_1.DefaultModal, { size: 'lg' });
        activeModal.componentInstance.modalHeader = 'Large Modal';
    };
    Modals.prototype.smModalShow = function () {
        var activeModal = this.modalService.open(default_modal_component_1.DefaultModal, { size: 'sm' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    };
    Modals.prototype.staticModalShow = function () {
        var activeModal = this.modalService.open(default_modal_component_1.DefaultModal, { size: 'sm',
            backdrop: 'static' });
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = "This is static modal, backdrop click\n                                                    will not close it. Click \u00D7 or confirmation button to close modal.";
    };
    Modals.prototype.childModalShow = function () {
        var activeModal = this.modalService.open(default_modal_component_1.DefaultModal, { size: 'sm' });
        activeModal.componentInstance.modalHeader = 'Child modal';
        activeModal.componentInstance.modalContent = "I am a child modal, opened from parent component!";
    };
    return Modals;
}());
Modals = __decorate([
    core_1.Component({
        selector: 'modals',
        styleUrls: ['./modals.scss'],
        templateUrl: './modals.html'
    }),
    __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal])
], Modals);
exports.Modals = Modals;
//# sourceMappingURL=modals.component.js.map
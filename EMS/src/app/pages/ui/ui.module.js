"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var nga_module_1 = require("../../theme/nga.module");
var ng2_slim_loading_bar_1 = require("ng2-slim-loading-bar");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ui_routing_1 = require("./ui.routing");
var ui_component_1 = require("./ui.component");
var buttons_component_1 = require("./components/buttons/buttons.component");
var grid_component_1 = require("./components/grid/grid.component");
var icons_component_1 = require("./components/icons/icons.component");
var modals_component_1 = require("./components/modals/modals.component");
var slim_component_1 = require("./components/slim/slim.component");
var typography_component_1 = require("./components/typography/typography.component");
var flatButtons_1 = require("./components/buttons/components/flatButtons");
var raisedButtons_1 = require("./components/buttons/components/raisedButtons");
var sizedButtons_1 = require("./components/buttons/components/sizedButtons");
var disabledButtons_1 = require("./components/buttons/components/disabledButtons");
var iconButtons_1 = require("./components/buttons/components/iconButtons");
var largeButtons_1 = require("./components/buttons/components/largeButtons");
var dropdownButtons_1 = require("./components/buttons/components/dropdownButtons");
var groupButtons_1 = require("./components/buttons/components/groupButtons");
var icons_service_1 = require("./components/icons/icons.service");
var default_modal_component_1 = require("./components/modals/default-modal/default-modal.component");
var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            nga_module_1.NgaModule,
            ng_bootstrap_1.NgbDropdownModule,
            ng_bootstrap_1.NgbModalModule,
            ng2_slim_loading_bar_1.SlimLoadingBarModule.forRoot(),
            ui_routing_1.routing
        ],
        declarations: [
            buttons_component_1.Buttons,
            grid_component_1.Grid,
            icons_component_1.Icons,
            modals_component_1.Modals,
            slim_component_1.SlimComponent,
            typography_component_1.Typography,
            ui_component_1.Ui,
            flatButtons_1.FlatButtons,
            raisedButtons_1.RaisedButtons,
            sizedButtons_1.SizedButtons,
            disabledButtons_1.DisabledButtons,
            iconButtons_1.IconButtons,
            largeButtons_1.LargeButtons,
            dropdownButtons_1.DropdownButtons,
            groupButtons_1.GroupButtons,
            default_modal_component_1.DefaultModal
        ],
        entryComponents: [
            default_modal_component_1.DefaultModal
        ],
        providers: [
            icons_service_1.IconsService
        ]
    })
], UiModule);
exports.UiModule = UiModule;
//# sourceMappingURL=ui.module.js.map
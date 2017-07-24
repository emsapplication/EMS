"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HandsontableSectionComponent = (function () {
    function HandsontableSectionComponent() {
        this.currentHeading = 'Basic';
    }
    HandsontableSectionComponent.prototype.select = function (e) {
        if (e.heading) {
            this.currentHeading = e.heading;
        }
    };
    return HandsontableSectionComponent;
}());
HandsontableSectionComponent = __decorate([
    core_1.Component({
        selector: 'handsontable-section',
        template: "\n               <div class=\"widgets\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <ba-card cardTitle=\"Examples\">\n                         <section id=\"handsontable\">\n                           <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <basic-demo></basic-demo>\n                                    <br>\n                                    <br>\n                                    <advanced-demo></advanced-demo>\n                                    <br>\n                                    <br>\n                                    <finance-demo></finance-demo>  \n                                    <br>\n                                    <science-demo></science-demo>\n                                    <br>\n                                    <br>   \n                                    <sheet-demo></sheet-demo>\n                                    <br>\n                                    <br>\n                                    <sport-demo></sport-demo>\n                                </div>\n                           </div>\n                         </section>\n                       </ba-card>\n                    </div>\n                  </div>\n               </div>\n             "
    })
], HandsontableSectionComponent);
exports.HandsontableSectionComponent = HandsontableSectionComponent;
function escape(text) {
    return text.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}
//# sourceMappingURL=handsontable-section.js.map
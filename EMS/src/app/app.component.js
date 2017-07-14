/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
//import { Component } from '@angular/core';
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular'; }
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        $('#menu_toggle').on('click', function () {
            console.log('clicked - menu toggle');
            var CURRENT_URL = window.location.href.split('#')[0].split('?')[0], $BODY = $('body'), $MENU_TOGGLE = $('#menu_toggle'), $SIDEBAR_MENU = $('#sidebar-menu'), $SIDEBAR_FOOTER = $('.sidebar-footer'), $LEFT_COL = $('.left_col'), $RIGHT_COL = $('.right_col'), $NAV_MENU = $('.nav_menu'), $FOOTER = $('footer');
            if ($BODY.hasClass('nav-md')) {
                $SIDEBAR_MENU.find('li.active ul').hide();
                $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
            }
            else {
                $SIDEBAR_MENU.find('li.active-sm ul').show();
                $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
            }
            $BODY.toggleClass('nav-md nav-sm');
            //setContentHeight();
            /*$RIGHT_COL.css('min-height', $(window).height());
            
                var bodyHeight = $BODY.outerHeight(),
                    footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
                    leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
                    contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
            
                // normalize content
                contentHeight -= $NAV_MENU.height() + footerHeight;
            
                $RIGHT_COL.css('min-height', contentHeight); */
            $('.dataTable').each(function () { $(this).dataTable().fnDraw(); });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.component.js.map
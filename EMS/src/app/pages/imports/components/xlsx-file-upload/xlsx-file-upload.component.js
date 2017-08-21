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
var ng2_file_upload_1 = require("ng2-file-upload/ng2-file-upload");
var ts_xlsx_1 = require("ts-xlsx");
var rxjs_1 = require("rxjs");
var URL = 'https://foo.bar.com';
var XlsxFileUploadComponent = (function () {
    function XlsxFileUploadComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploadedXls = new core_1.EventEmitter();
        this.filesSubject = new rxjs_1.Subject();
        this._uploadedXls = this.filesSubject.asObservable()
            .switchMap(function (file) {
            return new rxjs_1.Observable(function (observer) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    observer.next(e.target.result);
                };
                reader.readAsBinaryString(file);
                return function () {
                    reader.abort();
                };
            })
                .map(function (value) {
                return ts_xlsx_1.read(value, { type: 'binary' });
            }).map(function (wb) {
                return wb.SheetNames.map(function (sheetName) {
                    var sheet = wb.Sheets[sheetName];
                    //sheet["!objects"].c
                    //let address_of_cell = 'A1';
                    //var desired_cell = sheet[address_of_cell];
                    /* Get the value */
                    //var desired_value = (desired_cell ? desired_cell.v : undefined);
                    //debugger;
                    return sheet;
                });
            }).map(function (results) {
                debugger;
                return { result: 'success', payload: results };
            })
                .catch(function (e) { return rxjs_1.Observable.of({ result: 'failure', payload: e }); });
        });
    }
    XlsxFileUploadComponent.prototype.ngOnInit = function () {
        this.subscription = this._uploadedXls.subscribe(this.uploadedXls);
    };
    XlsxFileUploadComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    XlsxFileUploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    XlsxFileUploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    XlsxFileUploadComponent.prototype.fileDropped = function (files) {
        for (var i = 0; i < files.length; i++) {
            this.filesSubject.next(files[i]);
        }
    };
    return XlsxFileUploadComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], XlsxFileUploadComponent.prototype, "uploadedXls", void 0);
XlsxFileUploadComponent = __decorate([
    core_1.Component({
        selector: 'xlsx-file-upload',
        templateUrl: './xlsx-file-upload.component.html',
        styleUrls: ['./xlsx-file-upload.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], XlsxFileUploadComponent);
exports.XlsxFileUploadComponent = XlsxFileUploadComponent;
//# sourceMappingURL=xlsx-file-upload.component.js.map
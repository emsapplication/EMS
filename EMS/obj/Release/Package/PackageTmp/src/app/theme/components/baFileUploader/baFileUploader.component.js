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
var ngx_uploader_1 = require("ngx-uploader");
var BaFileUploader = (function () {
    function BaFileUploader(renderer) {
        this.renderer = renderer;
        this.fileUploaderOptions = { url: '' };
        this.onFileUpload = new core_1.EventEmitter();
        this.onFileUploadCompleted = new core_1.EventEmitter();
        this.defaultValue = '';
    }
    BaFileUploader.prototype.bringFileSelector = function () {
        this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
        return false;
    };
    BaFileUploader.prototype.beforeFileUpload = function (uploadingFile) {
        var files = this._fileUpload.nativeElement.files;
        if (files.length) {
            var file = files[0];
            this._onChangeFileSelect(files[0]);
            if (!this._canFleUploadOnServer()) {
                uploadingFile.setAbort();
            }
            else {
                this.uploadFileInProgress = true;
            }
        }
    };
    BaFileUploader.prototype._onChangeFileSelect = function (file) {
        this._inputText.nativeElement.value = file.name;
    };
    BaFileUploader.prototype._onFileUpload = function (data) {
        if (data['done'] || data['abort'] || data['error']) {
            this._onFileUploadCompleted(data);
        }
        else {
            this.onFileUpload.emit(data);
        }
    };
    BaFileUploader.prototype._onFileUploadCompleted = function (data) {
        this.uploadFileInProgress = false;
        this.onFileUploadCompleted.emit(data);
    };
    BaFileUploader.prototype._canFleUploadOnServer = function () {
        return !!this.fileUploaderOptions['url'];
    };
    return BaFileUploader;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", ngx_uploader_1.NgUploaderOptions)
], BaFileUploader.prototype, "fileUploaderOptions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaFileUploader.prototype, "onFileUpload", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BaFileUploader.prototype, "onFileUploadCompleted", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BaFileUploader.prototype, "defaultValue", void 0);
__decorate([
    core_1.ViewChild('fileUpload'),
    __metadata("design:type", core_1.ElementRef)
], BaFileUploader.prototype, "_fileUpload", void 0);
__decorate([
    core_1.ViewChild('inputText'),
    __metadata("design:type", core_1.ElementRef)
], BaFileUploader.prototype, "_inputText", void 0);
BaFileUploader = __decorate([
    core_1.Component({
        selector: 'ba-file-uploader',
        styleUrls: ['./baFileUploader.scss'],
        templateUrl: './baFileUploader.html',
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], BaFileUploader);
exports.BaFileUploader = BaFileUploader;
//# sourceMappingURL=baFileUploader.component.js.map
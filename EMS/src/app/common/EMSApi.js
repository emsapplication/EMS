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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
// Observable class extensions
require("rxjs/add/observable/of");
require("rxjs/add/observable/throw");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var EMSApi = (function () {
    function EMSApi(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        console.log("EMSApi");
    }
    EMSApi.prototype.getService = function (url) {
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EMSApi.prototype.getServiceWithId = function (url, param) {
        return this.http
            .get(url + "/" + param, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //    getServiceWithDynamicQueryTerm(url: string, key: string, val: string): Observable < any > {
    //        return this.http
    //            .get(url + "/?" + key + "=" + val, this.options)
    //            .map(this.extractData)
    //            .catch(this.handleError);
    //    }
    //    getServiceWithMultipleQueryTerm(url: string, query: string): Observable < any > {
    //        return this.http
    //            .get(url + "/?" + query, this.options)
    //            .map(this.extractData)
    //            .catch(this.handleError);
    //    }
    //    getServiceWithFixedQueryString(url: string, param: any): Observable < any > {
    //        this.options = new RequestOptions({ headers: this.headers, search: 'query=' + param });
    //        return this.http
    //            .get(url, this.options)
    //            .map(this.extractData)
    //            .catch(this.handleError);
    //    }
    //    getServiceWithComplexObjectAsQueryString(url: string, param: any): Observable < any > {
    //        let params: URLSearchParams = new URLSearchParams();
    //        for(var key in param) {
    //        if (param.hasOwnProperty(key)) {
    //            let val = param[key];
    //            params.set(key, val);
    //        }
    //    }
    //    this.options = new RequestOptions({ headers: this.headers, search: params });
    //    return this.http
    //        .get(url, this.options)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}
    EMSApi.prototype.createService = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .post(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EMSApi.prototype.updateService = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .put(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EMSApi.prototype.patchService = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .patch(url, body, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EMSApi.prototype.deleteService = function (url, param) {
        var params = new http_1.URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        this.options = new http_1.RequestOptions({ headers: this.headers, search: params });
        return this.http
            .delete(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EMSApi.prototype.deleteServiceWithId = function (url, key, val) {
        return this.http
            .delete(url + "/?" + key + "=" + val, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EMSApi.prototype.extractData = function (res) {
        console.log("getData");
        var body = res.json();
        console.log(body);
        return body || {};
    };
    EMSApi.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        //this.toasterService.showToaster('error', 'Oops!! An error occurred', errMsg);
        //this.loaderService.displayLoader(false);
        return Observable_1.Observable.throw(errMsg);
    };
    return EMSApi;
}());
EMSApi = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EMSApi);
exports.EMSApi = EMSApi;
//# sourceMappingURL=EMSApi.js.map
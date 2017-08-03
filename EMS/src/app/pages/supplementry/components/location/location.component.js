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
var router_1 = require("@angular/router");
var ng2_smart_table_1 = require("ng2-smart-table");
var EMSApi_1 = require("../../../../common/EMSApi");
var app_service_1 = require("../../../../app.service");
var Location = (function () {
    function Location(router, route, _EMSApi, _state) {
        this.router = router;
        this.route = route;
        this._EMSApi = _EMSApi;
        this._state = _state;
        this.query = '';
        this.settings = {
            mode: 'external',
            hideSubHeader: true,
            pager: {
                display: true,
                perPage: 10,
            },
            edit: {
                editButtonContent: '<i class="ion-edit"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="ion-trash-a"></i>',
                confirmDelete: true
            },
            columns: {
                Location: {
                    title: 'First Name',
                    type: 'string'
                },
                Description: {
                    title: 'Last Name',
                    type: 'string'
                }
            }
        };
        this.source = new ng2_smart_table_1.LocalDataSource();
        //this.source = [
        //    {
        //        id: 1,
        //        firstName: 'Mark',
        //        lastName: 'Otto',
        //        username: '@mdo',
        //        email: 'mdo@gmail.com',
        //        age: '28'
        //    },
        //    {
        //        id: 2,
        //        firstName: 'Jacob',
        //        lastName: 'Thornton',
        //        username: '@fat',
        //        email: 'fat@yandex.ru',
        //        age: '45'
        //    },
        //    {
        //        id: 3,
        //        firstName: 'Larry',
        //        lastName: 'Bird',
        //        username: '@twitter',
        //        email: 'twitter@outlook.com',
        //        age: '18'
        //    },
        //    {
        //        id: 4,
        //        firstName: 'John',
        //        lastName: 'Snow',
        //        username: '@snow',
        //        email: 'snow@gmail.com',
        //        age: '20'
        //    },
        //    {
        //        id: 5,
        //        firstName: 'Jack',
        //        lastName: 'Sparrow',
        //        username: '@jack',
        //        email: 'jack@yandex.ru',
        //        age: '30'
        //    },
        //    {
        //        id: 6,
        //        firstName: 'Ann',
        //        lastName: 'Smith',
        //        username: '@ann',
        //        email: 'ann@gmail.com',
        //        age: '21'
        //    },
        //    {
        //        id: 7,
        //        firstName: 'Barbara',
        //        lastName: 'Black',
        //        username: '@barbara',
        //        email: 'barbara@yandex.ru',
        //        age: '43'
        //    },
        //    {
        //        id: 8,
        //        firstName: 'Sevan',
        //        lastName: 'Bagrat',
        //        username: '@sevan',
        //        email: 'sevan@outlook.com',
        //        age: '13'
        //    },
        //    {
        //        id: 9,
        //        firstName: 'Ruben',
        //        lastName: 'Vardan',
        //        username: '@ruben',
        //        email: 'ruben@gmail.com',
        //        age: '22'
        //    },
        //    {
        //        id: 10,
        //        firstName: 'Karen',
        //        lastName: 'Sevan',
        //        username: '@karen',
        //        email: 'karen@yandex.ru',
        //        age: '33'
        //    },
        //    {
        //        id: 11,
        //        firstName: 'Mark',
        //        lastName: 'Otto',
        //        username: '@mark',
        //        email: 'mark@gmail.com',
        //        age: '38'
        //    },
        //    {
        //        id: 12,
        //        firstName: 'Jacob',
        //        lastName: 'Thornton',
        //        username: '@jacob',
        //        email: 'jacob@yandex.ru',
        //        age: '48'
        //    },
        //    {
        //        id: 13,
        //        firstName: 'Haik',
        //        lastName: 'Hakob',
        //        username: '@haik',
        //        email: 'haik@outlook.com',
        //        age: '48'
        //    },
        //    {
        //        id: 14,
        //        firstName: 'Garegin',
        //        lastName: 'Jirair',
        //        username: '@garegin',
        //        email: 'garegin@gmail.com',
        //        age: '40'
        //    },
        //    {
        //        id: 15,
        //        firstName: 'Krikor',
        //        lastName: 'Bedros',
        //        username: '@krikor',
        //        email: 'krikor@yandex.ru',
        //        age: '32'
        //    }
        //];
    }
    Location.prototype.ngOnInit = function () {
        var _this = this;
        this._EMSApi.getService("http://localhost/EMS.ApiService/api/location").subscribe(function (result) { return _this.source.load(result); }, function (error) { return _this.message = error; });
    };
    Location.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    Location.prototype.onSave = function (event) {
        //this.router.navigate(['..//addLocation', event.data.id]);
        //this.router.navigate(['..//addLocation'], { relativeTo: this.route });
        this._state.set("LocationId", event.data.LocationId);
        this.router.navigate(['..//location'], { relativeTo: this.route });
        console.log("data", event.data.LocationId);
    };
    //onDelete(event) {
    //console.log('on delete');
    // delete data from server
    //this.delete(event.data).then(result => {
    //if (result === true) {
    // if data successfully deleted from server, remove data from local table too
    //this.source.remove(event.data);
    //}
    //}).catch(err => console.log(err));
    //}
    Location.prototype.navgateToAddLocation = function () {
        this.router.navigate(['..//location'], { relativeTo: this.route });
    };
    return Location;
}());
Location = __decorate([
    core_1.Component({
        selector: 'inputs',
        templateUrl: './inputs.html',
        styleUrls: ['./smartTables.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        EMSApi_1.EMSApi,
        app_service_1.AppState])
], Location);
exports.Location = Location;
//# sourceMappingURL=location.component.js.map
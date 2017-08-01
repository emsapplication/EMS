import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GridOptions } from "ag-grid";


import { SmartTablesService } from '../../../tables/components/smarttables/smarttables.service';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { EMSApi } from '../../../../common/EMSApi';
import { AppState, InternalStateType } from '../../../../app.service';

@Component({
    selector: 'inputs',
    templateUrl: './inputs.html',
    styleUrls: ['./smartTables.scss']
})

export class Location {

    query: string = '';
    message: string;
     settings = {
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

     source: LocalDataSource;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _EMSApi: EMSApi,
        private _state: AppState) {
        this.source = new LocalDataSource();
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

    ngOnInit() {
        this._EMSApi.getService("http://localhost/EMS.ApiService/api/location").subscribe(
            result => this.source.load(result),
            error => this.message = <any>error);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onSave(event: any) {
        //this.router.navigate(['..//addLocation', event.data.id]);
        //this.router.navigate(['..//addLocation'], { relativeTo: this.route });
        this._state.set("LocationId", event.data.LocationId);
        this.router.navigate(['..//location'], { relativeTo: this.route });
        console.log("data", event.data.LocationId);
    }

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

    navgateToAddLocation(): void {
        this.router.navigate(['..//location'], { relativeTo: this.route });
    }
}

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
    }

    ngOnInit() {
        this.bindData();
    }

    onDeleteConfirm(event: any): void {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log(event.data.LocationId);
            this._EMSApi.deleteServiceWithId("http://localhost/EMS.ApiService/api/location",
                event.data.LocationId).subscribe(
                result => this.bindData(),
                error => this.message = <any>error);
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

    bindData(): void {
        this._EMSApi.getService("http://localhost/EMS.ApiService/api/location").subscribe(
            result => this.source.load(result),
            error => this.message = <any>error);
    }
}

import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {GridOptions} from "ag-grid";
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.html',
  styleUrls: ['./smartTables.scss']
})
export class Location {
private gridOptions: GridOptions;
  constructor(private router: Router,
              private route: ActivatedRoute) {
 this.gridOptions = <GridOptions>{};
        var columnDefs = [
            {
                headerName: "LocationName",
                field: "LocationName",
                width: 400
                
            },
            {
                headerName: "Description",
                field: "Description",
                width: 400,
                cellStyle: {"white-space":"normal"}
            },
            {headerName: "Actions",
          suppressMenu: true,
          suppressSorting: true,
          template:
            `<button type="button" data-action-type="eidt" class="btn btn-info btn-xs">
               Edit
             </button>

            <button type="button" data-action-type="inactive" class="btn btn-danger btn-xs">
               Inactive
            </button>`
}

        ];
        var rowData = [
            {LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"},
{LocationName: "HYD-DLF", Description: "sfjksdgfuieryriejhtruietyruiethrjkethruietyruietyruieytruietyruietyieryruireyirgt"}
        ]


this.gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
};



  }

navgateToAddLocation():void {
this.router.navigate([ '..//addLocation'], { relativeTo: this.route })
}

onRowClicked(e): any {
        if (e.event.target !== undefined) {
            let data = e.data;
            let actionType = e.event.target.getAttribute("data-action-type");

            switch(actionType) {
                case "eidt":
                    return this.onActionViewClick(data);
                case "inactive":
                    return this.onActionRemoveClick(data);
            }
        }
    }

    public onActionViewClick(data: any){
        console.log("View action clicked", data);
    }

    public onActionRemoveClick(data: any){
        console.log("Remove action clicked", data);
    }
}

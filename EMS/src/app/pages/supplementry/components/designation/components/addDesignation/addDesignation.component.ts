import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AppState, InternalStateType } from '../../../../../../app.service';
import { EMSApi } from '../../../../../../common/EMSApi';
import { Designation } from "../../../../../../common/types/designation";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'addDesignation',
    templateUrl: './addDesignation.html',
})
export class AddDesignation {
    designationModel: Designation = new Designation();
    addDesignation: string;
    successMessage: string;
    isShowSucess: boolean = false;
    isShowError: boolean = false;
    invalidData: string;
    designationForm: FormGroup;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _state: AppState,
        private _EMSApi: EMSApi
    ) {
        this.designationForm = new FormGroup({
            name: new FormControl()
        });
    }
    ngOnInit() {
        this.addDesignation = "Add Designation";
        this._EMSApi.getServiceWithId("http://localhost/EMS.ApiService/api/designation",
            this._state.get("DesignationId")).subscribe(
            result => {
                this.addDesignation = "Update Designation";
                this.designationModel = result,

                    this._state.remove("DesignationId");
            },
            error => console.log(error));

        //alert(this._state.get("LocationId"));
        //let id = this.route.snapshot.paramMap.get('id');
    }

    private isEmpty(obj: any) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    navigateToLocationList(): void {
        this.router.navigate(['..//designationList'], { relativeTo: this.route });
    }

    Savedesignation(): void {
        if (this.addDesignation === "Update Designation" && this.designationModel.DesignationId) {
            console.log("update");
            console.log(this.designationModel);
            this._EMSApi.updateService("http://localhost/EMS.ApiService/api/designation",
                this.designationModel).subscribe(
                result => {
                    if (result === 1) {
                        this.isShowSucess = true;
                        this.isShowError = false;
                        this.successMessage = "Record Updated Successfully";

                    }
                },
                error => console.log(error));
        }
        else if (this.addDesignation === "Add Designation") {
            console.log("save");
            this._EMSApi.createService("http://localhost/EMS.ApiService/api/designation",
                this.designationModel).subscribe(
                result => {
                    if (result === 1) {
                        this.designationModel.DesignationName = "";
                        this.designationModel.ShortDesignation = "";
                        this.invalidData = "";
                        this.successMessage = "Record Saved Successfully";
                        this.isShowSucess = true;
                        this.isShowError = false;
                    }
                },
                error => console.log(error));
        }
        else {
            this.successMessage = "";
            this.isShowError = true;
            this.invalidData = "Invalid Data";
        }
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AppState, InternalStateType } from '../../../../../../app.service';
import { EMSApi } from '../../../../../../common/EMSApi';
import { Location } from "../../../../../../common/types/location";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'addLocation',
    templateUrl: './addLocation.html',
})
export class AddLocation {
    locationModel: Location = new Location();
    addLocation: string;
    successMessage: string;
    isShowSucess: boolean = false;
    isShowError: boolean = false;
    invalidData: string;
    locationForm: FormGroup;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private _state: AppState,
        private _EMSApi: EMSApi
    ) {
        this.locationForm = new FormGroup({
            name: new FormControl()
        });
    }
    ngOnInit() {
        this.addLocation = "Add Location";
        this._EMSApi.getServiceWithId("http://localhost/EMS.ApiService/api/location",
            this._state.get("LocationId")).subscribe(
            result => {
                this.addLocation = "Update Location";
                this.locationModel = result,
                    console.log(this.locationModel.LocationId);
                console.log(this.locationModel.Description);
                this._state.remove("LocationId");
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
        this.router.navigate(['..//locationList'], { relativeTo: this.route });
    }

    SaveLocation(): void {
        if (this.addLocation === "Update Location" && this.locationModel.LocationId) {
            console.log("update");
            console.log(this.locationModel);
            this._EMSApi.updateService("http://localhost/EMS.ApiService/api/location",
                this.locationModel).subscribe(
                result => {
                    if (result === 1) {
                        //this.locationModel.LocationId = null;
                        //this.locationModel.Location = "";
                        //this.locationModel.Description = "";

                        this.isShowSucess = true;
                        this.isShowError = false;
                        this.successMessage = "Record Updated Successfully";

                    }
                },
                error => console.log(error));
        }
        else if (this.addLocation === "Add Location") {
            console.log("save");
            this._EMSApi.createService("http://localhost/EMS.ApiService/api/location",
                this.locationModel).subscribe(
                result => {
                    if (result === 1) {
                        this.locationModel.Location = "";
                        this.locationModel.Description = "";
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

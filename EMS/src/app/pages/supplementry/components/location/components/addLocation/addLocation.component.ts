import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AppState, InternalStateType } from '../../../../../../app.service';
import { EMSApi } from '../../../../../../common/EMSApi';
import { Location } from "../../../../../../common/types/location";

@Component({
    selector: 'addLocation',
    templateUrl: './addLocation.html',
})
export class AddLocation {
    locationModel: Location = new Location();
    constructor(private router: Router,
        private route: ActivatedRoute,
        private _state: AppState,
        private _EMSApi: EMSApi
    ) {
    }
    ngOnInit() {       
            this._EMSApi.getServiceWithId("http://localhost/EMS.ApiService/api/location",
                this._state.get("LocationId")).subscribe(
                result => {
                    this.locationModel = result,
                        console.log(this.locationModel.LocationId);
                    console.log(this.locationModel.Description)
                },
                error => console.log(error));
            //this._state.remove("LocationId");
       

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
}

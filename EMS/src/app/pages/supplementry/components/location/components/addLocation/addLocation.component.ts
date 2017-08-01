import {Component} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { AppState, InternalStateType } from '../../../../../../app.service';

@Component({
  selector: 'addLocation',
  templateUrl: './addLocation.html',
})
export class AddLocation {
    constructor(private router: Router,
        private route: ActivatedRoute,
        private _state: AppState
) {
    }
    ngOnInit() {
        this._state.get("LocationId");
        alert(this._state.get("LocationId"));
        let id = this.route.snapshot.paramMap.get('id');
    }

navigateToLocationList(): void {
this.router.navigate([ '..//locationList'], { relativeTo: this.route });
}
}

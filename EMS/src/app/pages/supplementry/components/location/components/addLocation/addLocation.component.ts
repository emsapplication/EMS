import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'addLocation',
  templateUrl: './addLocation.html',
})
export class AddLocation {
    constructor(private router: Router,
              private route: ActivatedRoute) {
  }

navigateToLocationList(): void {
this.router.navigate([ '..//locationList'], { relativeTo: this.route });
}
}

import { Routes, RouterModule }  from '@angular/router';

import { Supplementry } from './supplementry.component';
import { Location } from './components/location/location.component';
import { AddLocation } from './components/location/components/addLocation/addLocation.component';

import { Designation } from './components/designation/designation.component';
import { AddDesignation } from './components/designation/components/addDesignation/addDesignation.component';
//import { Layouts } from './components/layouts/layouts.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Supplementry,
    children: [
      { path: 'locationDetails', component: Location },
      { path: 'location', component: AddLocation },
      { path: 'designationDetails', component: Designation },
      { path: 'designation', component: AddDesignation }
    ]
  }
];

export const routing = RouterModule.forChild(routes);


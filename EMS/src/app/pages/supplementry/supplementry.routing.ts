import { Routes, RouterModule }  from '@angular/router';

import { Supplementry } from './supplementry.component';
import { Location } from './components/location/location.component';
//import { Layouts } from './components/layouts/layouts.component';

import { AddLocation } from './components/location/components/addLocation/addLocation.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Supplementry,
    children: [
      { path: 'locationDetails', component: Location },
      { path: 'addLocation', component: AddLocation }
    ]
  }
];

export const routing = RouterModule.forChild(routes);


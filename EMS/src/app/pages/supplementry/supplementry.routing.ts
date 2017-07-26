import { Routes, RouterModule }  from '@angular/router';

import { SupplementryComponent } from './supplementry.component';
import { ModuleWithProviders } from '@angular/core';
//import { Inputs } from './components/inputs/inputs.component';
//import { Layouts } from './components/layouts/layouts.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'supplementary',
    component: SupplementryComponent,
    //children: [
    //  { path: 'inputs', component: Inputs },
    //  { path: 'layouts', component: Layouts }
    //]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

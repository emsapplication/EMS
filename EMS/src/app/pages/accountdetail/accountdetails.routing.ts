import { Routes, RouterModule } from '@angular/router';

import { AccountDetailsComponent } from './accountdetails.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AccountDetailsComponent,
    children: [
      // { path: 'treeview', component: TreeViewComponent }
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ImportDataComponent } from './importdata.component';
import { routing } from './importdata.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
   declarations: [
       ImportDataComponent,
  ],
  
})
export class ImportDataModule {}

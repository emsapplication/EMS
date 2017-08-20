import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ImportDataComponent } from './importdata.component';
import { routing } from './importdata.routing';

import { FileUploadModule } from "ng2-file-upload";
import { XlsxFileUploadComponent } from './components/xlsx-file-upload/xlsx-file-upload.component';


@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      FileUploadModule,
      routing
      //XlsxFileUploadComponent
  ],
   declarations: [
       ImportDataComponent,
       XlsxFileUploadComponent,
       //FileUploadModule,
  ],
  
})
export class ImportDataModule {}

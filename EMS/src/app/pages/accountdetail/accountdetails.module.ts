import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AccountDetailsComponent } from './accountdetails.component';
import { routing } from './accountdetails.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
   declarations: [
    
    AccountDetailsComponent,
  ],
  
})
export class AccountDetailsModule {}

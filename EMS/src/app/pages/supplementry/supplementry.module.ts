import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './supplementry.routing';


import { SupplementryComponent } from './supplementry.component';

import { CheckboxInputs } from './Components/location/components/checkboxInputs';

import { SelectInputs } from './Components/location/components/selectInputs';

import { StandardInputs } from './Components/location/components/standardInputs';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    routing
  ],
  declarations: [
    //Layouts,
    //Inputs,
    SupplementryComponent,
    StandardInputs,
    //ValidationInputs,
   // GroupInputs,
    CheckboxInputs,
    //Rating,
    SelectInputs,
    //InlineForm,
    //BlockForm,
    //HorizontalForm,
    //BasicForm,
    //WithoutLabelsForm
  ]
})
export class SupplementryModule {
}

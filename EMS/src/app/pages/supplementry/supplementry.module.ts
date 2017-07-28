import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './supplementry.routing';

import { Supplementry } from './supplementry.component';
import { Location } from './components/location';

import { AddLocation } from './components/location/components/addLocation/addLocation.component';
import {AgGridModule} from "ag-grid-angular/main";

//import { StandardInputs } from './components/location/components/standardInputs';
//import { ValidationInputs } from './components/location/components/validationInputs';
//import { GroupInputs } from './components/location/components/groupInputs';
//import { CheckboxInputs } from './components/location/components/checkboxInputs';
//import { Rating } from './components/location/components/ratinginputs';
//import { SelectInputs } from './components/location/components/selectInputs';

//import { InlineForm } from './components/layouts/components/inlineForm';
//import { BlockForm } from './components/layouts/components/blockForm';
//import { HorizontalForm } from './components/layouts/components/horizontalForm';
//import { BasicForm } from './components/layouts/components/basicForm';
//import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    routing,
AgGridModule.withComponents([])
  ],
  declarations: [
    Location,
    Supplementry,
    AddLocation
    //StandardInputs,
    //ValidationInputs,
    //GroupInputs,
    //CheckboxInputs,
    //Rating,
    //SelectInputs,
    //InlineForm,
    //BlockForm,
    //HorizontalForm,
    //BasicForm,
    //WithoutLabelsForm
  ]
})
export class SupplementryModule {
}


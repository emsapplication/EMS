
import { Component } from '@angular/core';
import { UploadResult } from './components/xlsx-file-upload/xlsx-file-upload.component';
import { BehaviorSubject } from 'rxjs';
import { EMSApi } from '../../common/EMSApi';

@Component({
    selector: 'importdata',
    styleUrls: ['./importdata.scss'],
    templateUrl: './importdata.html',
})
export class ImportDataComponent {

    public uploaderContent: BehaviorSubject<string> = new BehaviorSubject('please drop file in');
    constructor(private _EMSApi: EMSApi) {
    }

  public xlsxUploaded(result: UploadResult) {
     // this.uploaderContent.next(JSON.stringify(result));
      console.log("save");
      this._EMSApi.createService("http://localhost/ems.apiservice/api/ImportResourceDetail/",
          JSON.stringify(result)).subscribe(
          result => {
              if (result === 1) {
                  //this.designationModel.DesignationName = "";
                  //this.designationModel.ShortDesignation = "";
                  //this.invalidData = "";
                //  this.successMessage = "Record Saved Successfully";
                  //this.isShowSucess = true;
                  //this.isShowError = false;
              }
          },
          error => console.log(error));

     // console.log(JSON.stringify(result));
  }

}

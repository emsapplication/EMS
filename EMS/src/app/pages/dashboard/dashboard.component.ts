import {Component} from '@angular/core';

@Component({
  selector: 'nga-dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class DashboardComponent {

  constructor() {
  }

}



//import { Component, OnInit } from '@angular/core';
//import {Http} from '@angular/http';

//@Component({
//  selector: 'nga-dashboard',
//  styleUrls: ['./dashboard.scss'],
//  templateUrl: './dashboard.html'
//})
//export class DashboardComponent implements OnInit {

//    constructor(private _httpService : Http) {
//    }

//    apiValues: String[];
//    ngOnInit() {
//        this._httpService.get('localhost:api/values').subscribe(values => {
//            this.apiValues = values.json() as string[];
//        })
//    }

//}

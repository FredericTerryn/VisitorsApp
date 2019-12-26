import { Component, OnInit } from '@angular/core';
import { VisitorformService } from '../visitor-form/visitorform.service';
import { Visitor } from '../visitor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  historyOfVisitors: Visitor[]; 

  constructor(
    private _visitorService: VisitorformService
  ) {}

  ngOnInit() {
    this._visitorService.getHistoryOfVisitors().subscribe(
      (res: Visitor[]) => {
        this.historyOfVisitors = res; 
      }
    )
  }

  get diagnostic() { return JSON.stringify(this.historyOfVisitors); }

}

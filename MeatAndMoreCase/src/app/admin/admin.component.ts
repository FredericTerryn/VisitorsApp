import { Component, OnInit } from '@angular/core';
import { VisitorformService } from '../visitor-form/visitorform.service';
import { Visitor } from '../visitor';
import { visitors} from './data'; 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  historyOfVisitors: Visitor[]; 
  visitors: any[]; 
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  yAxisLabel = 'People Logged in';

  constructor(
    private _visitorService: VisitorformService, 
  ) {
    Object.assign(this, {visitors}); 
  }

  ngOnInit() {
    this._visitorService.getHistoryOfVisitors().subscribe(
      (res: Visitor[]) => {
        this.historyOfVisitors = res; 
      }
    )
  }

  get diagnostic() { return JSON.stringify(this.historyOfVisitors); }

}

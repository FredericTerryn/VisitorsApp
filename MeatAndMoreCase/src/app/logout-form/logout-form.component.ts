import { Component, OnInit } from '@angular/core';
import { VisitorformService } from '../visitor-form/visitorform.service';
import { Visitor } from '../visitor';

@Component({
  selector: 'app-logout-form',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.scss']
})
export class LogoutFormComponent implements OnInit {

  visitors: Visitor[]; 

  constructor(
    private _visitorService: VisitorformService
  ) {}

  ngOnInit() {
    this.visitors = this._visitorService.visitors; 
  }

  get diagnostic() { return JSON.stringify(this.visitors); }
}

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
  searchString: string; 

  constructor(
    private _visitorService: VisitorformService
  ) {}

  ngOnInit() {
    this._visitorService.getCurrentVisitors().subscribe(
      (res:Visitor[]) => {
        this.visitors = res; 
    }); 
  }

  onLogout(){
    this._visitorService.getVisitorByName(this.searchString).subscribe(
      (res:Visitor[]) => {
        console.log("onlogout" + JSON.stringify(res))
        this.visitors = res; 
      }
    ); 
    console.log(this.searchString); 
  }

  get diagnostic() { return JSON.stringify(this.visitors); }
}

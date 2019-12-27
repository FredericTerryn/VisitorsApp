import { Component, OnInit } from '@angular/core';
import { VisitorformService } from '../visitor-form/visitorform.service';
import { Visitor } from '../visitor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-form',
  templateUrl: './logout-form.component.html',
  styleUrls: ['./logout-form.component.scss']
})
export class LogoutFormComponent implements OnInit {

  visitors: Visitor[]; 
  searchString: string; 

  constructor(
    private _router: Router, 
    private _visitorService: VisitorformService
  ) {}

  ngOnInit() {
    this._visitorService.getCurrentVisitors().subscribe(
      (res:Visitor[]) => {
        this.visitors = res; 
    }); 
  }

  searchVisitor(){
    this._visitorService.getVisitorByName(this.searchString).subscribe(
      (res:Visitor[]) => {
        this.visitors = res; 
      }
    ); 
  }

  onLogout(visitor: Visitor){
    this._visitorService.logOutVisitor(visitor).subscribe(
      (res: Visitor) => {
        alert("Succesfully logged out:" + res.name); 
        this._router.navigate(["/home"]); 
      }, err => {
        alert("Something went wrong.")
      }
    ); 
  }



  get diagnostic() { return JSON.stringify(this.visitors); }
}

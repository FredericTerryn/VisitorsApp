import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor } from '../visitor';
import { VisitorformService } from './visitorform.service';

@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.scss']
})
export class VisitorFormComponent implements OnInit {

  typeOfVisits = ['Supplier', 'Visitor', 'Applicant', 'Other']; 
  model = new Visitor(0, "", "", new Date(), "", ""); 
  submitted = false; 

  constructor(
    private _router: Router, 
    private _visitorFormService: VisitorformService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;  
    this._visitorFormService.newLogin(this.model).subscribe(
        (res: Visitor) => {
          this._router.navigate(["/home"]); 
          alert("Welcome:" + res.name); 
        }, err => {
          alert("Something went wrong.");
          console.log('error' + err)}
    ); 
  }; 

  get diagnostic() { return JSON.stringify(this.model); }
}

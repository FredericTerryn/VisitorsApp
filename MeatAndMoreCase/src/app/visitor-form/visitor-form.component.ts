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
  model = new Visitor(0, "", "", "", ""); 
  submitted = false; 

  constructor(
    private _router: Router, 
    private _visitorFormService: VisitorformService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true;  
    this._visitorFormService.newLogin(this.model); 
    this._router.navigate(['/loggedin']);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}

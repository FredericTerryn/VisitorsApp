import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor } from '../visitor';

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
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted = true; 
    console.log(this.model); 
    this._router.navigate(['/loggedin']);
  }

  get diagnostic() { return JSON.stringify(this.model); }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitorFormComponent } from './visitor-form/visitor-form.component'; 
import {LoggedInComponent} from './logged-in/logged-in.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/visitorform', pathMatch: 'full' },
  { path: 'visitorform', component: VisitorFormComponent },
  { path: 'loggedin', component: LoggedInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisitorFormComponent } from './visitor-form/visitor-form.component'; 
import {LoggedInComponent} from './logged-in/logged-in.component'; 
import { LogoutFormComponent } from './logout-form/logout-form.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}, 
  { path: 'visitorform', component: VisitorFormComponent },
  { path: 'loggedin', component: LoggedInComponent}, 
  { path: 'logout', component: LogoutFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

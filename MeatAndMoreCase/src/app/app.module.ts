import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { LogoutFormComponent } from './logout-form/logout-form.component';



@NgModule({
  declarations: [
    AppComponent,
    VisitorFormComponent,
    LoggedInComponent,
    LogoutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatInputModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
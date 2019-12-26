import { Injectable } from '@angular/core';
import { Visitor } from '../visitor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VisitorformService {

  visitors: Visitor[] = []; 

  constructor( 
    private http : HttpClient 
  ) { }

  newLogin(model: Visitor) {
    return this.http.post(environment.baseUrl + "visitors", model); 
  }

  getCurrentVisitors() {
    return this.http.get(environment.baseUrl + "visitors");
  }

  getVisitorByName(searchString: string) {
    return this.http.get(environment.baseUrl + "visitors?q=" + searchString, {
    });
  }

  logOutVisitor(visitor: Visitor) {
    return this.http.delete(environment.baseUrl + "visitors/" + visitor.id); 
  }

  getHistoryOfVisitors() {
    return this.http.get(environment.baseUrl + "visitors/history"); 
  }
}

import { Injectable } from '@angular/core';
import { Visitor } from '../visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorformService {

  visitors: Visitor[] = []; 

  constructor() { }

  newLogin(model: Visitor) {
    this.visitors.push(model); 
  }
}

import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse } from '@angular/common/http';

import * as Observable from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class GotHttpService {
  // public allbook =[];
  public copy:Array<any>;
  public baseURL ='https://anapioficeandfire.com/api/books'
  mydata: any;
  constructor(public _http:HttpClient)  { 
    console.log("gothttp called consructor")
  }
  
  public getallbook():any {
    for(var i=1;i<40;i++){
    
      let mydata =this._http.get(this.baseURL+'/'+i)
      this.copy =[];
      const count=this.copy.push(mydata)
    }
    console.log(i);
    console.log(this.copy);
    return this.copy;
    
  }
  
  
}

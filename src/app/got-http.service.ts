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
  public baseURL ='https://anapioficeandfire.com/api'
  public mydata: any;
  public url;
  constructor(public _http:HttpClient)  { 
    console.log("gothttp called consructor")
  }
  public copydata=[];
  //call the url frome the allbook 
  public getbookdata(url):any{
    console.log(url)
    let mydata =this._http.get(url) ;
    return mydata;
  }
  //call all data 
  public getallbook():any {
      let mydata =this._http.get(this.baseURL +'/books') 
      return mydata;
    
  }
  public getallhouse():any {
    let mydata =this._http.get(this.baseURL+'/house') 
    console.log(" house ")
    console.log(mydata)
    return mydata; 
 }
}

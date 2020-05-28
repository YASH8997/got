import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  constructor(public GotHttpService:GotHttpService,private _router:ActivatedRoute ,private router:Router) 
  {
    console.log("book constructor is")
   }
   public bookinfo;
   public url;
  ngOnInit(): void {
    let url=this._router.snapshot.paramMap.get('url');
    console.log(url)
    this.GotHttpService.getbookdata(url).subscribe(
    data=>{
      this.bookinfo = data;
     console.log(this.bookinfo)

    },
    error =>{
      console.log( 'some error')
      alert("error");

    }
  )


  }

}

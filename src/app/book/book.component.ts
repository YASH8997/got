import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(public GotHttpService:GotHttpService,private _router:ActivatedRoute ,private router:Router) 
  {
    console.log("book constructor is")
   }
   public povCharacters ;
   public bookinfo;
   public url;
   public allbook;
  ngOnInit(): void {
    let url=this._router.snapshot.paramMap.get('url');
    console.log(url)
    console.log("url")
    this.GotHttpService.getbookdata(url).subscribe(
    data=>{
      this.bookinfo = data;
    },
    error =>{
      console.log( 'some error')
      alert("error");

    }
  )
  }
}

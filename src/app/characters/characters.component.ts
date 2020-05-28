import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(public GotHttpService:GotHttpService,private _router:ActivatedRoute ,private router:Router) { }
  public charinfo;
  public url;
 ngOnInit(): void {
   let url=this._router.snapshot.paramMap.get('url');
   console.log(url)
   this.GotHttpService.getbookdata(url).subscribe(
   data=>{
     this.charinfo = data;
    console.log(this.charinfo)

   },
   error =>{
     console.log( 'some error')
     alert("error");

   }
 )


 }

}



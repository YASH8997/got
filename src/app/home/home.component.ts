import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allbook
  constructor(public GotHttpService:GotHttpService) { }

  ngOnInit(): void {
    this.GotHttpService.getallbook().subscribe(
      data=>{
        console.log("got");
        this.allbook=console.log(data);
      },
      error =>{
        console.log( 'some error')

      }
    )
  }

}

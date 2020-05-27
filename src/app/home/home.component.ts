import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allbook=[];
  constructor(public GotHttpService:GotHttpService) { }

  ngOnInit(): void {
    this.GotHttpService.getallbook().subscribe(
      data=>{
        console.log(data)
        this.allbook = data;
        console.log("got after ");
        console.log(this.allbook);
      },
      error =>{
        console.log( 'some error')

      }
    )
  }

//   this.GotHttpService.getallhouse().subscribe(
//     data=>{
//       console.log(data)
//     },
//     error =>{
//       console.log( 'some error')

//     }
//   )
//  }

}

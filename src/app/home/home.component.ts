import { Component, OnInit } from '@angular/core';
import { GotHttpService } from '../got-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allbook=[];
  public allcheer=[];
  public characters=[];
  constructor(public GotHttpService:GotHttpService) { }

  ngOnInit(): void {
    this.GotHttpService.getallbook().subscribe(
      data=>{
        this.allbook = data;
      },
      error =>{
        console.log( 'some error')
      }
    );

    
    this.GotHttpService.getallhouse().subscribe(
      data=>{
       this.allcheer=data
      },
      error =>{
        console.log( 'some error')
  
      }
    );
    this.GotHttpService.getallcharacters().subscribe(
      data=>{
       this.characters=data
      },
      error =>{
        console.log( 'some error')
  
      }
    )
  }
}

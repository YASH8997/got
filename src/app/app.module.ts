import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GotHttpService } from './got-http.service';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    HouseComponent,
    CharactersComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path :'home',component:HomeComponent},
      {path : '' ,redirectTo:'home' ,pathMatch:'full'},
      {path :'book/:url', component:BookComponent},
      {path :'house/:url', component:HouseComponent},
      {path :'characters/:url', component:CharactersComponent}
    ])
  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

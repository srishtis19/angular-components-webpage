import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CardsComponent } from './cards/cards.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { AppRoutingModule } from './app-routing.module';


import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { IconDemoComponent } from './icon-demo/icon-demo.component';
import { BadgeDemoComponent } from './badge-demo/badge-demo.component';
import { GridListDemoComponent } from './grid-list-demo/grid-list-demo.component';


//import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    TopnavComponent,
    SidenavListComponent,
    
    
    ButtonToggleComponent,
    CardDemoComponent,
    IconDemoComponent,
    BadgeDemoComponent,
    GridListDemoComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
   
}
/*public onCardClick(router: Router){}
navigate(){
this.router.navigateByURL(['path']);
}*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';
import {IconDemoComponent} from './icon-demo/icon-demo.component';
import {BadgeDemoComponent} from './badge-demo/badge-demo.component';
import {GridListDemoComponent} from './grid-list-demo/grid-list-demo.component';
import {CardsComponent} from './cards/cards.component';
import {CardDemoComponent} from './card-demo/card-demo.component';

const routes : Routes=[
  {path:'Button-toggle', component:ButtonToggleComponent},
  {path:'Icon', component:IconDemoComponent},
  {path:'Badge', component:BadgeDemoComponent},
  {path:'GridList', component:GridListDemoComponent},
  {path:'Card', component:CardDemoComponent},
  {path:'', component:CardsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

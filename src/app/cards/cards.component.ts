import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {COMPONENTS} from '../comp-list';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  declarations:[
    MatGridListModule,

  ]
  comps=COMPONENTS;

  constructor() { }

  ngOnInit(): void {
  }

}

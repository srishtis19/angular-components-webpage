import { Component, OnInit } from '@angular/core';
import {CompContent} from '../comp-content';
import {COMPONENTS} from '../comp-list';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

 comps = COMPONENTS;

  constructor() { }
 
  ngOnInit(): void {
  }

}

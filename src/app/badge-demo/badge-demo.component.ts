import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-demo',
  templateUrl: './badge-demo.component.html',
  styleUrls: ['./badge-demo.component.css']
})
export class BadgeDemoComponent implements OnInit {

  hidden=false;
  
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

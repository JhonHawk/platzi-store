import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Stores';
  text: string;
  
  power: number = 10;
  
  constructor() { }

  ngOnInit() {
  }

}

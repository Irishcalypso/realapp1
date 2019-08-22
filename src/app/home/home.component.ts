import { Component, OnInit } from '@angular/core';

@Component({
 templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

 data1: string;

 ngOnInit() {
  this.data1 = 'Hello Home Page';
 }

}

import { Component, OnInit } from '@angular/core';

@Component({
 templateUrl: 'posts.component.html'
})

export class PostsComponent implements OnInit {

 data2: string;

 ngOnInit() {
  this.data2 = 'Hello Posts Page';
 }

}

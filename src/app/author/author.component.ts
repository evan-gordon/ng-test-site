import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  imagePath: string;

  constructor() { 
    this.imagePath = '/assets/images/mazey.jpg'
  }

  ngOnInit() {
  }

}

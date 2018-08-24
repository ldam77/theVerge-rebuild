import { Component, OnInit } from '@angular/core';
import { Article } from './../models/article.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  articles: Article[] = [new Article("Samsung Galaxy Note 9 review: more, more, more", "Dan Seifert", "note9.jpg"), new Article("NASA is prepared if a battery ever explodes in space", "Loren Grush", "nasa.jpg")];
  img1: string = "../../assets/img/" + this.articles[0].imageLink;
  img2: string = "../../assets/img/" + this.articles[1].imageLink;

}

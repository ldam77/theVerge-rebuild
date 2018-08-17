import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  group1: Article[] = [new Article("Samsung Galaxy Note 9 review: more, more, more", "Dan Seifert", "note9.jpg"), new Article("NASA is prepared if a battery ever explodes in space", "Loren Grush", "nasa.jpg")];

  console.log(this.group1[0].imageLink);

}

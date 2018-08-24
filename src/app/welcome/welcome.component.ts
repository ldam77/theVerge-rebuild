import { Component, OnInit } from '@angular/core';
import { Article } from './../models/article.model';
import { ArticleService} from './../article.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ArticleService]
})
export class WelcomeComponent implements OnInit {
  articles: Article[];
  img1: string;
  img2: string;
  img3: string;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(dataLastEmittedFromObserver => {
     this.articles = dataLastEmittedFromObserver;
     this.img1 = "../../assets/img/" + this.articles[0].imageLink;
     this.img2 = "../../assets/img/" + this.articles[1].imageLink;
     this.img3 = "../../assets/img/" + this.articles[2].imageLink;
   });

  }

  goToArticlePage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  };

}

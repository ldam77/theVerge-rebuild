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
  articles: FirebaseListObservable<any[]>;

  constructor(private router: Router, private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  goToArticlePage(clickedArticle) {
    this.router.navigate(['articles', clickedArticle.$key]);
  };

  img1: string = "../../assets/img/" + this.articles[0].imageLink;
  img2: string = "../../assets/img/" + this.articles[1].imageLink;

}

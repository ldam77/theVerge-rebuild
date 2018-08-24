import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<any[]>;
  articlesArray: Article[];

  constructor(private database: AngularFireDatabase) {
    this.articles = database.list('articles');
  }

  getArticles() {
    this.articles.subscribe(dataLastEmittedFromObserver => {
     this.articlesArray = dataLastEmittedFromObserver;
     console.log(this.articlesArray);
   });
    return this.articlesArray;
  }

  getArticleById(articleId: string) {
    return this.database.object('albums/' + articleId);
  }
}

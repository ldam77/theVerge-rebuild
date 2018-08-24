import { Injectable } from '@angular/core';
import { Article } from './models/article.model';

@Injectable()
export class ArticleService {
  article: Article;
  constructor() { }

  getArticles() {
    return [];
  }

  getArticleById(articleId: string) {
    return this.article;
  }
}

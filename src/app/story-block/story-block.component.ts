import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-story-block',
  templateUrl: './story-block.component.html',
  styleUrls: ['./story-block.component.css']
})
export class StoryBlockComponent {
  @Input() childStory: Article;
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.css']
})
export class ImageBlockComponent {
  @Input() childImage: string;
  console.log(childImage);
  imgSource = '../../assets/img/' + this.childImage;
  console.log(imgSource);
}

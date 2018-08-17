import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrls: ['./image-block.component.css']
})
export class ImageBlockComponent {
  @Input() childImage: string;

  imgSource: string = '../../assets/img/' + this.childImage;

  constructor(){
    console.log(this.childImage);
    console.log(this.imgSource);
  }

}

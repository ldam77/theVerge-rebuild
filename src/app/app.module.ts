import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoryBlockComponent } from './story-block/story-block.component';
import { ImageBlockComponent } from './image-block/image-block.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavBarComponent,
    StoryBlockComponent,
    ImageBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoryBlockComponent } from './story-block/story-block.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavBarComponent,
    StoryBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

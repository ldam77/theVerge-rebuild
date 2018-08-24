import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoryBlockComponent } from './story-block/story-block.component';
import { ImageBlockComponent } from './image-block/image-block.component';
import { WelcomeComponent } from  './welcome/welcome.component';
import { routing } from './app.routing';


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

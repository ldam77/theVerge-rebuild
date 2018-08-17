import { Component } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {
  currentTime = new Date();
  weekdays: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dayOfWeek: string = this.weekdays[this.currentTime.getDay()];
  month: string = this.months[this.currentTime.getMonth()];
  date: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

}

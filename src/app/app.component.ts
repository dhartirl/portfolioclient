import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'David Hart';
  subtitle = 'Web Developer';
  contactPhone = '085 152 7126';
  contactEmail = 'dhartirl@gmail.com';

  constructor () {
  }
}

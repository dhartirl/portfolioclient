import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor (
    private metaService: Meta,
    private titleService: Title
  ) {
    this.titleService.setTitle("David Hart - Web Developer");
    this.metaService.addTags([
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }
    ])
  }
}

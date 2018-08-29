import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [ UserService, RouterModule ]
})
export class NavigationComponent implements OnInit {

  loggedIn: boolean;

  items: Object[] = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Portfolio',
      url: '/portfolio'
    }
  ]

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loggedIn = this.userService.currentUser != null;
  }

  logout() {
    this.userService.logout().subscribe(res => {
      window.location.href = window.location.origin;
    });
  }

}

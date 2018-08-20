import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PortfolioItem } from '../portfolio-item';
import { PortfolioService } from '../portfolio.service';
import { UserData } from '../user-data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
  providers: [ PortfolioService, UserService ]
})
export class PortfolioItemComponent implements OnInit {

  item: PortfolioItem;
  canEdit: boolean;
  currentUser: UserData;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private portfolioService: PortfolioService,
    private userService: UserService
  ) {
   }

  ngOnInit() {
    console.log(this.userService.currentUser);
    this.canEdit = this.userService.hasAccessLevel(1);
    this.route.paramMap.subscribe(params => {
      this.getItem(params.get('_id'));
    });
  }

  getItem(id) {
    this.portfolioService.getItem(id).subscribe(item => this.item = item);
  }

}

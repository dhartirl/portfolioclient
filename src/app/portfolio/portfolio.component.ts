import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../portfolio-item';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [ PortfolioService ]
})
export class PortfolioComponent implements OnInit {

  items: PortfolioItem[];

  constructor(
    private portfolioService: PortfolioService
  ) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.portfolioService.getAllItems().subscribe(items => this.items = items);
  }

}

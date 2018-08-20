import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { PortfolioService } from '../portfolio.service';
import { PortfolioItem } from '../portfolio-item';

import { FileUploadService } from '../file-upload.service';
import { nextTick } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css'],
  providers: [ 
    PortfolioService, 
    FileUploadService 
  ]
})
export class PostEditorComponent implements OnInit {

  id: string;
  item: PortfolioItem;
  selectedImage: FileList;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private portfolioService: PortfolioService,
    private fileUploadService: FileUploadService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.get('_id') != null) {
        this.id = params.get('_id');
        this.getItem(this.id);
      } else {
        this.id = '';
        this.item = new PortfolioItem();
      }
    });
  }

  getItem(id) {
    this.portfolioService.getItem(id).subscribe(item => this.item = item);
  }

  uploadImage() {
    const file = this.selectedImage.item(0);
    this.fileUploadService.uploadFile(file).subscribe(location => this.item.image = location);
  }

  selectImage(event) {
    this.selectedImage = event.target.files;
    this.uploadImage();
  }

  createPost() {
    this.portfolioService.createItem(this.item).subscribe(result => this.router.navigate(['portfolio', result]));
  }

  updatePost() {
    this.portfolioService.updateItem(this.item).subscribe(result => this.router.navigate(['portfolio', result]));
  }

  deleteItem() {
    this.portfolioService.deleteItem(this.id).subscribe(success => window.location.href = window.location.origin);
  }

  removeTech(index) {
    this.item.techStack.splice(index, 1);
  }

  addTech() {
    if(!this.item.techStack) {
      this.item.techStack = [];
    }
    this.item.techStack.push('');
  }

  trackByFn(index: any, item: any) {
    return index;
 }

}

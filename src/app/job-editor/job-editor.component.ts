import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { JobService } from '../job.service';
import { Job } from '../job';

@Component({
  selector: 'app-job-editor',
  templateUrl: './job-editor.component.html',
  styleUrls: ['./job-editor.component.css'],
  providers: [ JobService ]
})
export class JobEditorComponent implements OnInit {

  item: Job;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private jobService: JobService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.get('_id') != null) {
        this.id = params.get('_id');
        this.getItem(this.id);
      } else {
        this.id = '';
        this.item = new Job();
      }
      console.log(this.id);
      console.log(this.item);
    });
  }

  getItem(id) {
    this.jobService.getItem(id).subscribe(item => this.item = item);
  }

  createPost() {
    this.jobService.createItem(this.item).subscribe(result => window.location.href = window.location.origin);
  }

  updatePost() {
    this.jobService.updateItem(this.item).subscribe(result => window.location.href = window.location.origin);
  }

  deleteItem() {
    this.jobService.deleteItem(this.id).subscribe(success => window.location.href = window.location.origin);
  }

  removeBullet(index) {
    this.item.bullets.splice(index, 1);
  }

  addBullet() {
    if(!this.item.bullets) {
      this.item.bullets = [];
    }
    this.item.bullets.push('');
  }

}

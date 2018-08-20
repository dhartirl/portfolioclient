import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { Job } from '../job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
  providers: [ JobService, UserService ]
})
export class JobComponent implements OnInit {

  jobs: Job[];
  canEdit: boolean;

  constructor(
    private jobService: JobService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.canEdit = this.userService.hasAccessLevel(1);
    this.getJobs();
  }

  getJobs() {
    this.jobService.getAllItems().subscribe(jobs => this.jobs = jobs.reverse());
  }

}

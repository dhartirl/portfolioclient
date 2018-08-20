import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { JobEditorComponent } from './job-editor/job-editor.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: JobComponent },
  { path: 'jobs/new', component: JobEditorComponent },
  { path: 'jobs/:_id', component: JobEditorComponent },
  { path: 'jobs/:_id/edit', component: JobEditorComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/new', component: PostEditorComponent },
  { path: 'portfolio/:_id', component: PortfolioItemComponent },
  { path: 'portfolio/:_id/edit', component: PostEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

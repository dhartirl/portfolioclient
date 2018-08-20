import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EditorModule } from '@tinymce/tinymce-angular';
import { AuthInterceptor } from './auth-interceptor';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneSquare, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { JobComponent } from './job/job.component';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { LoginComponent } from './login/login.component';
import { JobEditorComponent } from './job-editor/job-editor.component';

library.add(faPhoneSquare);
library.add(faEnvelopeSquare);
library.add(faLinkedin, faGitSquare);

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    NavigationComponent,
    PortfolioItemComponent,
    JobComponent,
    PostEditorComponent,
    LoginComponent,
    JobEditorComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    EditorModule,
    FormsModule
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

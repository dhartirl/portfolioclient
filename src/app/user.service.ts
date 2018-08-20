import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { S3Info, S3AccessData, UserData } from './user-data';
import { environment } from '../environments/environment';

@Injectable()
export class UserService {

  currentUser: UserData;
  private loginEndpoint = environment.apiLocation + "/user/login";
  private logoutEndpoint = environment.apiLocation + "/user/logout";

  constructor(
    private http: HttpClient
  ) { 
    this.retrieveUser();
   }

  login(username, password): Observable<any> {
    return new Observable<any>(observer => {
      this.http.post<any>(this.loginEndpoint, {
        username: username,
        password: password
      }).subscribe(res => {
        if(res.username) {
          this.currentUser = res;
          this.saveUser();
          observer.next({ 
            success: true
          });
          observer.complete();
        } else {
          observer.next({
            success: false,
            err: res.error
          });
          observer.complete();
        }
      });
    });
  }

  logout(): Observable<any> {
    return new Observable<any>(observer => {
      this.http.post<any>(this.logoutEndpoint, {}).subscribe(res => {
        this.destroyUser();
        observer.next(true);
        observer.complete();
      });
    });
  }

  retrieveUser(): boolean {
    let user = localStorage.getItem("user");
    if(user) {
      this.currentUser = JSON.parse(user);
      return true;
    } else {
      return false;
    }
  }

  saveUser(): void {
    if(this.currentUser) {
      localStorage.setItem("user", JSON.stringify(this.currentUser));
    }
  }

  destroyUser(): void {
    this.currentUser = null;
    localStorage.removeItem("user");
  }

  hasAccessLevel(level: number): boolean {
    return this.currentUser && this.currentUser.accessLevel >= level;
  }

  getToken(): string {
    if(this.currentUser) {
      return this.currentUser.token;
    } else {
      return '';
    }
  }
}

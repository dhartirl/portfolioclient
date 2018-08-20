import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

import { Job } from './job';

@Injectable()
export class JobService {

  items: Job[];
  private jobEndpoint = environment.apiLocation + "/jobs";
  private jobDetailEndpoint = this.jobEndpoint + "/:_id";
  private createJobEndpoint = this.jobEndpoint + "/create";
  private updateJobEndpoint = this.jobEndpoint + "/:_id/update";
  private deleteJobEndpoint = this.jobEndpoint + "/:_id/delete";

  constructor(
    private http: HttpClient
  ) { 
  }

  getAllItems(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobEndpoint);
  }

  getItem(id): Observable<Job> {
    return this.http.get<Job>(this.jobDetailEndpoint.replace(":_id", id));
  }

  createItem(item: Job): Observable<string> {
    return new Observable<string>(observer => {
      this.http.post<Job>(this.createJobEndpoint, {
        title: item.title,
        employer: item.employer,
        address: item.address,
        dates: item.dates,
        bullets: item.bullets
      }).subscribe((res) => {
        observer.next(res._id);
        observer.complete();
      });
      
      return { unsubscribe() {} };
    });
  }

  updateItem(item: Job): Observable<string> {
    const updateUrl = this.updateJobEndpoint.replace(":_id", item._id.toString());

    return new Observable<string>(observer => {
      this.http.put<Job>(updateUrl, item).subscribe((res) => {
        observer.next(res._id);
        observer.complete();
      });

      return { unsubscribe() {} };
    });
  }

  deleteItem(id: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      var delUrl = this.deleteJobEndpoint.replace(":_id", id);
      this.http.delete(delUrl).subscribe((res) => {
        observer.next(true);
        observer.complete();
      });
  
      return { unsubscribe() {} };
    });
  }

}

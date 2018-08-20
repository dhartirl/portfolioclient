import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

import { PortfolioItem } from './portfolio-item';

@Injectable()
export class PortfolioService {

  items: PortfolioItem[];
  private portfolioEndpoint = environment.apiLocation + "/portfolio";
  private portfolioItemEndpoint = environment.apiLocation + "/portfolio/:_id";
  private createItemEndpoint = this.portfolioEndpoint + "/create";
  private updateItemEndpoint = this.portfolioItemEndpoint + "/update";
  private deleteItemEndpoint = this.portfolioItemEndpoint + "/delete";

  constructor(
    private http: HttpClient
  ) { 
  }

  getAllItems(): Observable<PortfolioItem[]> {
    return this.http.get<PortfolioItem[]>(this.portfolioEndpoint);
  }

  getItem(id): Observable<PortfolioItem> {
    return this.http.get<PortfolioItem>(this.portfolioItemEndpoint.replace(":_id", id));
  }

  createItem(item: PortfolioItem): Observable<string> {
    return new Observable<string>(observer => {
      this.http.post<PortfolioItem>(this.createItemEndpoint, {
        name: item.name,
        url: item.url,
        image: item.image,
        description: item.description,
        writeup: item.writeup
      }).subscribe((res) => {
        observer.next(res._id);
        observer.complete();
      });
      
      return { unsubscribe() {} };
    });
  }

  updateItem(item: PortfolioItem): Observable<string> {
    const updateUrl = this.updateItemEndpoint.replace(":_id", item._id.toString());

    return new Observable<string>(observer => {
      this.http.put<PortfolioItem>(updateUrl, item).subscribe((res) => {
        observer.next(res._id);
        observer.complete();
      });

      return { unsubscribe() {} };
    });
  }

  deleteItem(id: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      var delUrl = this.deleteItemEndpoint.replace(":_id", id);
      this.http.delete(delUrl).subscribe((res) => {
        observer.next(true);
        observer.complete();
      });
  
      return { unsubscribe() {} };
    });
  }

}

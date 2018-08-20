import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(file): Observable<string> {

    const uploadEndpoint = environment.apiLocation + "/file/upload";

    const retImg = new Observable<string>((observer) => {
      
      let formData = new FormData();
      formData.append('file', file);
      console.log(formData);

      let headers = new HttpHeaders({'Skip-Content':'true'});

      this.http.post<any>(uploadEndpoint, formData, {headers: headers}).subscribe((res) => {

        console.log("Upload Service: File uploaded to " + res.Location);
        observer.next(res.Location);
        observer.complete();
      });

      console.log("Upload Service: Starting Upload");

      return {unsubscribe() {}};
    });

    return retImg;
  }

}

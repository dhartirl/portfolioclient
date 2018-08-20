import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private userService: UserService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if(req.headers.get('Skip-Content') != null) {
            const headers = req.headers.delete('Skip-Content');
            req = req.clone({
                headers
            });

            req = req.clone({
                setHeaders: {
                'Accept'       : 'application/json',
                'x-access-token': this.userService.getToken(),
                },
            });
        } else {
            req = req.clone({
                setHeaders: {
                'Content-Type' : 'application/json; charset=utf-8',
                'Accept'       : 'application/json',
                'x-access-token': this.userService.getToken(),
                },
            });
        }

        return next.handle(req);
    }
}
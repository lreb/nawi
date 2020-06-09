import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiResponseInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          const elapsed = Date.now() - started;
          // console.log(`Request for event status: ${event.status}`);
          // console.log(`Request for event headers: ${ JSON.stringify(event.headers) }`);
          // console.log(`Request for event body: ${ JSON.stringify(event.body) }`);
          // console.log(`Request for responseType: ${req.responseType}`);
          // console.log(`Request for headers: ${ JSON.stringify(req.headers) }`);
          // console.log(`Request for withCredentials: ${req.withCredentials}`);
          // console.log(`Request for method: ${req.method}`);
          // console.log(`Request for responseType: ${req.responseType}`);
          // console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        }
      })
    );
  }
}

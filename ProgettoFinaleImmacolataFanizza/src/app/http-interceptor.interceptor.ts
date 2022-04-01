import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  tenantID = 'fe_0621';
  
  
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0ODgwMzcyMSwiZXhwIjoxNjQ5NjY3NzIxfQ.BG5yTDCc4NLN3-LAENxUkKB6wZO6KTFQSJ6fnWRmLPvSB6RihRXHAl-DIhjMS8yBvQBT2pOE_d6a0vpaYK06oQ'

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {
        headers: request.headers.set("Authorization", this.bearerToken)
          .set("X-TENANT-ID", this.tenantID)
      }
    )
    return next.handle(myRequest);
  }
}



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
  
  
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NzkzODEzNywiZXhwIjoxNjQ4ODAyMTM3fQ.34Oe_rK3N5Cow65PqhwRGO7vUhPW8qiNF_Kv8PIHBRErwz-E-va5d17Gx4kBuJcw7lI8A8CRxlHY8B9GTU_DAA'

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



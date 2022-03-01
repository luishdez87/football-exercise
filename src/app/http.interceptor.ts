import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'f270bd778c2a4ab9bafe8243d2bcf53d';
    return next.handle(httpRequest.clone({ setHeaders: { 'X-Auth-Token': token } }));
  }
}
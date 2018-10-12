import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = environment.apiToken;
    const authReq = req.clone({
      headers: req.headers.set('TRN-Api-Key', authToken)
    });
    return next.handle(authReq);
  }
}

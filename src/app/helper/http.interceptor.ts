import {Injectable} from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {catchError,switchMap} from 'rxjs';
import {AuthenticationService} from '../services/authentication/authentication.service';

@Injectable()
export class AuthInterceptor  implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let accessToken = sessionStorage.getItem('accessToken')

        if(accessToken){
          req = req.clone({setHeaders: {'Authorization': `Bearer ${accessToken}`}});
        }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 403 || error.status == 401) {
          return this.authService.refreshToken().pipe(
            switchMap(() => {
              accessToken = this.authService.getAccessToken();
              const clonedReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${accessToken}`
                }
              });
              return next.handle(clonedReq);
              }
            )
          );
        }
        return throwError(() => error.statusText);
      })
    ) ;
  }


}

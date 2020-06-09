import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/classes/User';
import { ApiRestService } from 'src/app/shared/services/api-rest.service';
import { catchError } from 'rxjs/operators';
import { ServiceResult } from 'src/app/models/classes/TrackerError';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User[] | ServiceResult> {
  constructor(private data: ApiRestService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[] | ServiceResult> {
    return this.data.get(environment.apis.netCoreAPI.host, '', 'user')
    .pipe(
      catchError(err => of(err))
    );
  }
}

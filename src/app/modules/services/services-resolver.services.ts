
import { IService } from 'src/app/models/IServices';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceResolver implements Resolve<IService> {



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IService> {
    const id = +route.paramMap.get('id');
    return null;
  }

}

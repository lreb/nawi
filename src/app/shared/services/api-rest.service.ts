import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  apiHost = 'https://putsreq.com/8EaANchgi4aU0V704UOV'

  constructor(private http: HttpClient) { }

  post(data): Observable<any> {
    return this.http.post(this.apiHost, data);
    // return of(data);
  }
}

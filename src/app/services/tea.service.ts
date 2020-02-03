import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ITea } from '../models/Tea.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeaService {
  private baseUrl = `${environment.api_url}/tea`;

  constructor(private http: HttpClient) { }

  getTeas() : Observable<ITea[]> {
    const url = `${this.baseUrl}/GetAll`;
    return this.http.get<ITea[]>(url);
  }

  getTeasByCategory(category: string)  {
    const url = `${this.baseUrl}/GetByCategory`;
    let params = new HttpParams().set('category', category);
    return this.http.get<ITea[]>(url, {params: params});
  }
}

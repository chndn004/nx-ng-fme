import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL = 'https://mocki.io/v1/b9d114e6-bd1c-4fe1-98dd-8bfa59ad71b2';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}

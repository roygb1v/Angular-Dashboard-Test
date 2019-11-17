import { Injectable } from '@angular/core';
import { Product } from './Models/product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Replace url with actual web server
  private _url: string = "../assets/data/products.json";

  constructor(private http: HttpClient) { }

  // Make a HTTP request to fetch data from the server
  getProducts(): Observable<Product[]> {
    // return this.products;
    return this.http.get<Product[]>(this._url)
  }
}

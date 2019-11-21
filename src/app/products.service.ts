import { Injectable } from '@angular/core';
import { Product } from './Models/product.interface';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // Replace url with actual web server
  private url = '../assets/data/products.json';
  private jsonUrl = 'http://127.0.0.1:3000/products';

  constructor(private http: HttpClient) { }

  // Make a HTTP request to fetch ALL data from the server
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  // TO redo
  getProduct(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonUrl);
  }

  updateProduct(id: string, product: Product) {
    const putURL = `http://127.0.0.1:3000/products/${id}`;
    return this.http.put<Product>(putURL, product, httpOptions);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.jsonUrl, product, httpOptions);
  }
}

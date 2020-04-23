import { Injectable } from '@angular/core';
import { Product } from "./Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  apiurl = "https://5e79b9eb17314d0016133513.mockapi.io/kumasan";

  getListProduct(): Observable<Product[]> {
    //return this.products;
    return this.httpClient.get<Product[]>(this.apiurl);
  }
  searchProduct(keywords: String): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiurl + "?search=" + keywords);
  }
  deleteProduct(id): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.apiurl}/${id}`);
  }
  getProductById(id): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiurl}/${id}`);
  }
  insertProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.apiurl}`, product);
  }
  updateProduct(product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiurl}/${product.id}`, product);
  }

}

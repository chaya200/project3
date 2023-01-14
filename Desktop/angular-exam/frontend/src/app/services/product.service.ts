import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})


export class ProductService {
    URL_prod = "http://localhost:3001/shop/product";
    URL_cat = "http://localhost:3001/shop/category"
    constructor(private http: HttpClient) { }

    // Create
    addItem(item: Product): Observable<Product> {
        return this.http.post<Product>(this.URL_prod, item);
    }

    // Read
    getItems(): Observable<Product[]> {
        return this.http.get<Product[]>(this.URL_prod);
    }

    getCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(this.URL_cat);
  }

    // Update
    updateItem(item: Product): Observable<Product> {
        return this.http.put<Product>(this.URL_prod +"/"+ item.id, item);
    }

    // Delete
    deleteItem(id:any): Observable<Product> {
        return this.http.delete<Product>(this.URL_prod +"/"+ id);
    }
}


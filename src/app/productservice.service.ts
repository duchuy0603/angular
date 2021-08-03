import { Injectable,Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  API:string='https://60f5887f18254c00176dff17.mockapi.io/pro'
  constructor(private http:HttpClient) { }
  getinfo(id:number):Observable<Product>{
return this.http.get<Product>(`${this.API}/${id}`)
  }
  getProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.API)
      }
      AddProduct(item:Product):Observable<Product>{
        return this.http.post<Product>(this.API,item)
      }
      deleteProduct(id:number):Observable<Product>{
        return this.http.delete<Product>(`${this.API}/${id}`)
      }
      updateProduct(item:Product):Observable<Product>{
        return this.http.put<Product>(`${this.API}/${item.id}`,item)
      }
}

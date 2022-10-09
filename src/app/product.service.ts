import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost:8080/product/api/";

  getAllProducts():Observable<Product[]>{
   return this.http.get<Product[]>(this.baseUrl);
  }
  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+id);
  }
  deleteProductById(id:string){
   return this.http.delete(this.baseUrl+id);
  }
  addProduct(product:Product){
    return this.http.post(this.baseUrl,product);
  }
  editProduct(product:Product,id:string){
    return this.http.put(this.baseUrl+id,product);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutsService {

  baseUrl:string='https://ecommerce.routemisr.com/api/v1'
  constructor(private _HttpClient:HttpClient) { }

  Categories():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/categories`)
  }
  subCategories(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/categories/${id}/subcategories`)
  }

  Products(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/products?subcategory[in]=${id}`)
  }
  singleProduct(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/products/${id}`)
  }

  getProductWithSubCat(id:any):Observable<any>{

    return this._HttpClient.get(`${this.baseUrl}/products?subcategory[in]=${id}`)
  }
  getAllProduct(pageNumber:number=1):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}/products?page=${pageNumber}`)
  }
}

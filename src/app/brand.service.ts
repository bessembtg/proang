import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _HttpClient:HttpClient) { }

  BaseUrl:string='https://ecommerce.routemisr.com/api/v1/'

  getBrand():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}brands`)
  }
  getAllProductWidhBrand(id:any):Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}products?brands=${id}`)
  }
}

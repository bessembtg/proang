import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  BaseUrl:string='https://ecommerce.routemisr.com/api/v1/'
  token:any=localStorage.getItem('userToken')
  addToCart(productId:any):Observable<any>{

    let dataObj={
      productId
    }
    return this._HttpClient.post(`${this.BaseUrl}cart`,dataObj,{headers:{
      token:this.token
    }})
  }

  getFromCart():Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}cart`,{headers:{
      token:this.token
    }})
  }

  updateCart(count:number,id:any):Observable<any>{

    let dataObj={
      count
    }
    return this._HttpClient.put(`${this.BaseUrl}cart/${id}`,dataObj,{headers:{
      token:this.token
    }})
  }
 removeSpecificCart(id:any):Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}cart/${id}`,{headers:{
      token:this.token
      }})
 }
}

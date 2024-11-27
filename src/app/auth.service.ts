import { Injectable } from '@angular/core';
import { Observable ,BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string="https://ecommerce.routemisr.com/api/v1/auth";
  userData:any;
  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('userToken')!=null){
      this.saveCurrentUser()
    }
   }

  register(userData:Object):Observable<any>{
   return this._HttpClient.post(`${this.baseUrl}/signup`,userData);
  }
  login(loginData:Object):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/signin`,loginData)
  }

  currentUser:any=new BehaviorSubject(null);

  saveCurrentUser(){
    let encodedToken=JSON.stringify(localStorage.getItem('userToken'))
    let decoded = jwtDecode(encodedToken)
    this.currentUser.next(decoded)
    console.log(decoded)
  }
}

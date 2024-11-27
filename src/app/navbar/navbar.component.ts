import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){
   

  }
 isLogin:boolean=false

 ngOnInit():void{

  this._AuthService.currentUser.subscribe({next:()=>{

    if(this._AuthService.currentUser.getValue()!=null){
      this.isLogin=true
    }
    else
    this.isLogin=false
  }})


 }
 logout(){
  localStorage.removeItem('userToken')
  this._AuthService.currentUser.next(null)
  this._Router.navigate(['/login'])
 }
}

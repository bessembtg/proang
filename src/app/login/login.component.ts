import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
errorMsg:string=''
constructor(private _AuthService:AuthService,private _Router:Router){

}

  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required])
  })

  login(loginData:FormGroup){
    return this._AuthService.login(loginData.value).subscribe({
      next:(data)=>{
        if(data.message==="success"){
          this._Router.navigate(['/products']);
          localStorage.setItem('userToken',data.token);
          this._AuthService.saveCurrentUser()

        }
      },
      error:(err)=>this.errorMsg=err.error.message
    })
  }
}

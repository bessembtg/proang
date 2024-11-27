import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private _AuthService:AuthService,private _Router:Router){

}


  registerForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
    rePassword:new FormControl(null,[Validators.required]),
    phone:new FormControl(null,[Validators.required])
  })

errorMsg:string=''


  SubmitRegister(formData:FormGroup){
   this._AuthService.register(formData.value).subscribe({
    next:(data)=>{
      if(data.message==="success"){
        this._Router.navigate(["/login"])
      }
    },
    error:(err)=>this.errorMsg=err.error.message,
    
   })
  }
}

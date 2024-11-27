import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {ProdutsService} from "../produts.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private _CartService:CartService,private _ProdutsService:ProdutsService){

}
msgQuantity:string=''
cartDetails:any={}
isLoading:boolean=false
getFromCart(){
  this.isLoading=true
  return this._CartService.getFromCart().subscribe({
    next:(data)=>{
      console.log(data);

      if(data.status==='success'){
        this.cartDetails=data;
      }
      },
    error:(err)=>{console.log(err);
    },
    complete:()=>{
      this.isLoading=false
    }
  })
}
updateCountFn(e:any,id:any){
this.isLoading=true
  this._ProdutsService.singleProduct(id).subscribe(({
    next:(data)=>
    {

      if(data.data.quantity>Number(e.target.value)){
        finalEdit();
        this.msgQuantity='';
      }
      else {
        this.msgQuantity='only let '+data.data.quantity;
      }

    }
  }))
  let finalEdit=()=>{
    this._CartService.updateCart(e.target.value,id).subscribe({
      next:(data)=> {
        if(data.status==='success'){
          this.cartDetails=data;
        }

      },
      error:(err)=>{
        console.log(err);

      },
      complete:()=>{
        this.isLoading
      }
    })
  }

}
removeFromCart(id:any){
  this._CartService.removeSpecificCart(id).subscribe({
    next:(data)=>{
      if(data.status==='success'){
        this.cartDetails=data;
      }

    },
    error:(err)=>{
      console.log(err);

    }

  })
}
ngOnInit(){
  this.getFromCart()
}
countPlus(count:any,id:any){
   count=count+1;
  this._ProdutsService.singleProduct(id).subscribe(({
    next:(data)=>
    {

      if(data.data.quantity>count){
        this.msgQuantity='';
        this._CartService.updateCart(count,id).subscribe({
          next:(data)=> {
            if(data.status==='success'){
              this.cartDetails=data;
            }
    
          },
          error:(err)=>{
            console.log(err);
    
          },
          complete:()=>{
            this.isLoading
          }
        })
      }
      else {
        this.msgQuantity='only let '+data.data.quantity;
      }

    }
  }))
}
countMoins(count:any,id:any){
 count=count-1;
 
   this._CartService.updateCart(count,id).subscribe({
     next:(data)=> {
       if(data.status==='success'){
         this.cartDetails=data;
       }

     },
     error:(err)=>{
       console.log(err);

     },
     complete:()=>{
       this.isLoading
     }
   })
 }

}

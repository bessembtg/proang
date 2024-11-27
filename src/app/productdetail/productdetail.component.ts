import { Component } from '@angular/core';
import { ProdutsService } from '../produts.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
constructor(private _ProdutsService:ProdutsService,private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){

}
id:any
myData:any
images:string[]=[]
title:string=''
msg:string=''
getSingleproduct(id:any){
  return this._ProdutsService.singleProduct(id).subscribe({
    next:(data)=>{
      this.myData=data.data
      this.images=data.data.images
      this.title=data.data.title
    
    }
  })
}
ngOnInit(){
  this.id=this._ActivatedRoute.snapshot.params['id']
  this.getSingleproduct(this.id)
}

mainSrc:string=''
changeSrc(src:any){
this.mainSrc=src
}
addToCart(productId:any){
  return this._CartService.addToCart(productId).subscribe({
    next:(data)=>{
      console.log(data)
      if(data.status=='success'){
        this.msg=data.message
      }
    },
    error:(err)=>{this.msg=''}
  })
  
}
getStars(rating:number){
  const fullSatrs=Math.floor(rating);
  const halfStars=rating%1!==0;
  const emptyStars=5-fullSatrs- (halfStars ? 1:0);
  return{
    fullSatrs:new Array(fullSatrs),
    halfStars:halfStars,
    emptyStars:new Array(emptyStars)
  };
}

}

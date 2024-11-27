import { Component } from '@angular/core';
import { ProdutsService } from '../produts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  AllProducts:any[]=[]
  nums:number[]=[1,2]
  isLoading:boolean=false

  constructor(private _ProdutsService:ProdutsService){

  }
  getAllProduct(num:number){
    this.isLoading=true
    return this._ProdutsService.getAllProduct(num).subscribe({
      next:(data)=>{
        this.AllProducts=data.data
      },
      complete:()=>{
        this.isLoading=false
      }
    })
    
  }

  ngOnInit(){
    this.getAllProduct(1)
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

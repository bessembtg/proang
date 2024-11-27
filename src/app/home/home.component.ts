import { Component } from '@angular/core';
import { ProdutsService } from '../produts.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCategory:any[]=[]
  subCategory:any[]=[]
  loading:boolean=false
  allProducts:any[]=[]
  isLoading:boolean=false
  index:number=6
  constructor(private _ProdutsService:ProdutsService){

  }

  Categories(){
    this.isLoading=true
    this._ProdutsService.Categories().subscribe({
      next:(data)=>{this.allCategory=data.data
      },
      error:(err)=>{console.log(err)},
      complete:()=>{this.isLoading=false},
    })
  }
  subCategories(id:any){
    console.log(id);
    this.allProducts=[]
    this.loading=true
    this.isLoading=true
    return this._ProdutsService.subCategories(id).subscribe({
      next:(data)=>{this.subCategory=data.data},
      complete: ()=>{this.loading=false
        this.isLoading=false
      }
    })
   
  }
  getProductWithSubCat(id:any){
    return this._ProdutsService.getProductWithSubCat(id).subscribe({
      next:(data)=>{
        this.allProducts=data.data
      }
    })
  }
  Products(id:any,i:any){
    console.log(id);
    this.index=i
    return this._ProdutsService.Products(id).subscribe({
      next:(data)=>this.allProducts=data.data.sort((a:any,b:any)=>b.ratingsAverage-a.ratingsAverage)
    })
  }
  ngOnInit(){
    this.Categories()
    this.subCategories("6439d58a0049ad0b52b9003f")
    this.Products("6407f1bcb575d3b90bf95797",this.index)

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    margin:20,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
getStars(rating:number){
  const FullStars=Math.floor(rating)
  const HalfStars=rating%1!==0
  const emptyStars=5-FullStars-(HalfStars?1:0);
  return{
  fullstars:new Array(FullStars),
  halfStars:HalfStars,
  emptystars:new Array(emptyStars)
  };
}
}

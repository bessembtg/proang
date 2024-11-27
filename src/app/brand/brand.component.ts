import { Component } from '@angular/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  isLoading:boolean=false

constructor(private _BrandService:BrandService){

}

allBrands:any[]=[]
getBrands(){
  this.isLoading=true

  return this._BrandService.getBrand().subscribe({
    next:(data)=>{
      this.allBrands=data.data;
    },
    complete:()=>{
      this.isLoading=false
    }
  })
}

getProductWithBrand(id:any){
  this.isLoading=true
  return this._BrandService.getAllProductWidhBrand(id).subscribe({
    next:(data)=>{
      console.log(data);
    },
    complete:()=>{
      this.isLoading=false
    }
  })
}
ngOnInit(){
  this.getBrands()
}

}

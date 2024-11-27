import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuard } from './auth.guard';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BrandComponent } from './brand/brand.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'home'},
  {path:'login',component:LoginComponent,title:'login'},
  {path:'register',component:RegisterComponent,title:'register'},
  {path:'cart',canActivate:[AuthGuard] ,component:CartComponent,title:'cart'},
  {path:'products',canActivate:[AuthGuard],component:ProductsComponent,title:'products'},
  {path:'products/:id',canActivate:[AuthGuard],component:ProductdetailComponent,title:'products'},
  {path:'brands',canActivate:[AuthGuard],component:BrandComponent},
  {path:'**',component:NotfoundComponent,title:'404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

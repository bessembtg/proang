import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BrandComponent } from './brand/brand.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductsComponent,
    ProductdetailComponent,
    BrandComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

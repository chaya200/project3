import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HeaderComponent } from './components/layout-area/header/header.component';
import { AsideComponent } from './components/layout-area/aside/aside.component';
import { MainComponent } from './components/layout-area/main/main.component';
import { FooterComponent } from './components/layout-area/footer/footer.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';
import { CartProductsComponent } from './components/cart-area/cart-products/cart-products.component';
import { UpdateCartComponent } from './components/cart-area/update-cart/update-cart.component';
import { EmptyCartComponent } from './components/cart-area/empty-cart/empty-cart.component';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { UpdateProductComponent } from './components/products-area/update-product/update-product.component';
import { OrderFormComponent } from './components/order-area/order-form/order-form.component';
import { MyOrdersComponent } from './components/order-area/my-orders/my-orders.component';
import { LoginComponent } from './components/login-area/login/login.component';
import { RegisterComponent } from './components/login-area/register/register.component';
import { AboutComponent } from './components/about-area/about/about.component';
import { SingleProductComponent } from './components/products-area/single-product/single-product.component';
import { SaleComponent } from './components/home-area/sale/sale.component';
import { MainAdminComponent } from './components/admin-area/main-admin/main-admin.component';
import { HomeLoginComponent } from './components/login-area/home-login/home-login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    MenuComponent,
    MenuComponent,
    HomeComponent,
    ProductsListComponent,
    CartProductsComponent,
    UpdateCartComponent,
    EmptyCartComponent,
    AddProductComponent,
    UpdateProductComponent,
    OrderFormComponent,
    MyOrdersComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    SingleProductComponent,
    SaleComponent,
    MainAdminComponent,
    HomeLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [LayoutComponent],

})
export class AppModule { }

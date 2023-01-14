import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { AddProductComponent } from './components/add-product/add-product.component';
// import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    MyNavComponent,
    AddProductComponent
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

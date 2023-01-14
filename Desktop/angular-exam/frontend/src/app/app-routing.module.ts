import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';


import { ProductsComponent } from './components/products/products.component';
// import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [

  // {path:"products", component:ProductsComponent},
  // {path:"update", component:UpdateComponent},
  {path:"products", component:ProductsComponent},
  {path:"add", component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

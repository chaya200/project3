import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about-area/about/about.component';
import { MainAdminComponent } from './components/admin-area/main-admin/main-admin.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { HomeLoginComponent } from './components/login-area/home-login/home-login.component';
import { LoginComponent } from './components/login-area/login/login.component';
import { RegisterComponent } from './components/login-area/register/register.component';
import { ProductsListComponent } from './components/products-area/products-list/products-list.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"products", component: ProductsListComponent},
  {path:"contact-us", component: AboutComponent},
  {path:"login", component: LoginComponent},
  {path:"home-login", component: HomeLoginComponent},
  {path:"register", component: RegisterComponent},
  {path:"admin", component: MainAdminComponent},
  

  { path:"" , redirectTo:"/home-login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

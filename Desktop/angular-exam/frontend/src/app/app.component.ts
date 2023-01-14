import { Component } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from './models/category';
// import { HttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myProds:Product[] = [];
  myCat:Category[] = [];

  data: Product = { name: '', category: 0 , date: '' , amount: 0, price: 0 };

  constructor(private prodSrv:ProductService){
        prodSrv.getItems().subscribe(res=>this.myProds=res);
        prodSrv.getCategories().subscribe(res=>this.myCat=res);
      }


  onSubmit(product:Product){
       console.log(product);
      this.prodSrv.addItem(product).subscribe(res=>this.prodSrv.getItems().subscribe(res=>this.myProds=res));
    }
  delProd(id:any){
        this.prodSrv.deleteItem(id).subscribe(res=>this.prodSrv.getItems().subscribe(res=>this.myProds=res));
      }
  updateProd(product:Product){

    this.prodSrv.updateItem(product).subscribe(res=>this.prodSrv.getItems().subscribe(res=>this.myProds=res));
  }
}


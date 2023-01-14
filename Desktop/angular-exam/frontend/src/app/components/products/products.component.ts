import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
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


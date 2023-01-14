import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  myCat:Category[] = [];
  myProds:Product[] = [];

  onSubmit(product:Product){
    console.log(product);
   this.prodSrv.addItem(product).subscribe(res=>this.prodSrv.getItems().subscribe(res=>this.myProds=res));
 }
  data: Product = { name: '', category: 0 , date: '' , amount: 0, price: 0 };

  constructor(private prodSrv:ProductService){
        prodSrv.getItems().subscribe(res=>this.myProds=res);
        prodSrv.getCategories().subscribe(res=>this.myCat=res);
      }

}

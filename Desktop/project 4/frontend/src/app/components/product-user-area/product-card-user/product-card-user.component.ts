import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card-user',
  templateUrl: './product-card-user.component.html',
  styleUrls: ['./product-card-user.component.css']
})
export class ProductCardUserComponent {
  @Input()
  public product: ProductModel;//props


//create new event
@Output()
public addItem = new EventEmitter<ProductModel>();
// @Output()
// public deleteMe = new EventEmitter<string>();

//report to father what you sent him
//בלחיצה על הכפתורת יעלה ארוע דליטמי
public async addToCart() {
  this.addItem.emit(this.product);
}
// public async deleteProduct() {
//   this.deleteMe.emit(this.product._id);
// }

}

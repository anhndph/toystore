import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  products: Product[];
  page= 1;
  pageSize = 5;
  length;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getListProduct().subscribe(data => {
      this.products = data;
      this.length = this.products.length;
    });
  }
  removeProduct(id) {
     this.productService.deleteProduct(id).subscribe(data => {
      this.getProducts();
    });

  }
}

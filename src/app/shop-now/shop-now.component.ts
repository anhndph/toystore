import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[];
  page = 1;
  pageSize = 9;

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productService.getListProduct().subscribe(data => {
      this.products = data;
      console.log(data)
    });
  }

}

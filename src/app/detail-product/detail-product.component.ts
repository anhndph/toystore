import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Product } from "../Product";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    this.getProduct();
  }

  product: Product;
  getProduct() {
    this.activatedRoute.params.subscribe(param => {
      this.productService.getProductById(param.productId).subscribe(data => {
        this.product = data;
      });
    });
  }
}

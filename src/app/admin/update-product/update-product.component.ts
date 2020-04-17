import { Component, OnInit } from '@angular/core';
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  product: Product;
  ngOnInit(): void {
    this.getProduct();
  }
  updateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("admin/manager");
    });
  }

  getProduct() {
    this.activatedRoute.params.subscribe(param => {
      this.productService.getProductById(param.productId).subscribe(data => {
        this.product = data;
      });
    });
  }
}

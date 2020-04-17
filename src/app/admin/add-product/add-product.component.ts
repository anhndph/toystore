import { Component, OnInit } from '@angular/core';
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
  product: Product = new Product();
  ngOnInit(): void {
  }
  addProduct() {
    this.productService.insertProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("admin/manager");
    });
  }
}

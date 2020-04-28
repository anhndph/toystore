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
        this.url = this.product.images;
      });
    });
  }


  
  url: string | ArrayBuffer;
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.product.images = this.url.toString();
      }
    }
  }

}

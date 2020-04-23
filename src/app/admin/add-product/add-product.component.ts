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
  addProduct(formAdd) {
    console.log(formAdd);
    this.productService.insertProduct(this.product).subscribe(data => {
      this.router.navigateByUrl("admin/manager");
    });
  }

  url: string | ArrayBuffer;
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.product.images=this.url.toString();
      }
    }
  }




}

import { Component, OnInit } from '@angular/core';
import { Product } from "../../Product";
import { ProductService } from "../../product.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router,
    private fbuiler: FormBuilder) { }



  product: Product = new Product();
  ngOnInit(): void {
  }

  get productName() {
    return this.checkInput(this.productForm.controls.name);
  }

  get productPrice() {
    return this.checkInput(this.productForm.controls.price);
  }

  get Productdescription() {
    return this.checkInput(this.productForm.controls.description);
  }

  get ProductImage() {
    return this.checkInput(this.productForm.controls.image);
  }

  checkInput(value) {
    for (let err in value.errors) {
      if (value.dirty) {
        return this.getErrorMes(err, value.errors[err]);
      }
    }
  }



  productForm = this.fbuiler.group({
    // id: new FormControl(),
    name: [null, [
      Validators.required,
      Validators.maxLength(30),
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z]+[a-zA-Z ]*')
    ]],
    price: [null, [
      Validators.required,
      // Validators.length()
      Validators.maxLength(20),
      Validators.minLength(2),
      Validators.pattern('[0-9]*')
    ]],
    description: [null, [
      Validators.required,
      // Validators.length()
      Validators.maxLength(100),
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z]+[ a-zA-Z ]*')
    ]],
    image: [null, [
      Validators.required,
      // Validators.length()
      // Validators.maxLength(100),
      // Validators.minLength(1),
      // Validators.pattern('^[a-zA-Z]+[ a-zA-Z ]*')
    ]],
  });

  getErrorMes(err, value) {
    let messages = {
      'required': 'Do not leave this field blank',
      'maxlength': `Maximum of  ${value.requiredLength} characters`,
      'minlength': `Minimum of ${value.requiredLength} characters`,
      'pattern': 'wrong format',
    };
    return messages[err];
  }

  addProduct() {
    this.product = this.productForm.value;
    this.product.images = this.url.toString();
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
        this.product.images = this.url.toString();
      }
    }
  }




}

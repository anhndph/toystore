import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from "../product.service";
import { Product } from '../Product';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
  
  @Input() keywords: String;
  @Input() products: Product[];
  ngOnInit(): void {
  }

  search() {
    this.productService.searchProduct(this.keywords).subscribe(data => {
      this.products = data;
      this.router.navigateByUrl("/shopnow");
    });
  }

}

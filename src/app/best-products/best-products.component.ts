import { Component, OnInit } from '@angular/core';
import { Product } from "../../app/Product";

@Component({
  selector: 'app-best-products',
  templateUrl: './best-products.component.html',
  styleUrls: ['./best-products.component.css']
})
export class BestProductsComponent implements OnInit {

  constructor() { }
  keywords: String;
  products: Product[];

  ngOnInit(): void {
   
  }

}

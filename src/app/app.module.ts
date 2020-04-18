import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { ProductComponent } from './product/product.component';
import { BestProductsComponent } from './best-products/best-products.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManagerComponent } from './admin/manager/manager.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { DashboardManagerComponent } from './admin/dashboard-manager/dashboard-manager.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopNowComponent,
    ProductComponent,
    BestProductsComponent,
    AboutComponent,
    DashboardComponent,
    ManagerComponent,
    AddProductComponent,
    DashboardManagerComponent,
    UpdateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

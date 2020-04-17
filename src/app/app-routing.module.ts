import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestProductsComponent } from './best-products/best-products.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ShopNowComponent } from './shop-now/shop-now.component';
import { DashboardManagerComponent } from './admin/dashboard-manager/dashboard-manager.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManagerComponent } from './admin/manager/manager.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: '', component: BestProductsComponent, children: [
      { path: "home", component: ProductComponent },
      { path: "about", component: AboutComponent },
      { path: "shopnow", component: ShopNowComponent }
    ]
  }, 
  
  {
    path: 'admin', component: DashboardManagerComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "manager", component: ManagerComponent },
      { path: "manager/insert-product", component: AddProductComponent },
      { path: "manager/update/:productId", component: UpdateProductComponent }
    ]
  },

 
  { path: "**", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

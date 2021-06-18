import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category-detail/:category', component: CategoryDetailComponent },
  { path: 'product-detail/:id', component:ProductDetailComponent },
  { path: 'my-account', component:MyAccountComponent },
  { path: 'my-cart', component:MyCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
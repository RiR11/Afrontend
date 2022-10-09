import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"list",component:ProductlistComponent},
  {path:"addproduct", component:AddproductComponent},
  {path:"product-details/:id",component:ProductdetailsComponent},
  {path:"edit/:id",component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyEventsComponent } from './components/company-events/company-events.component';
import { CompanyProfilComponent } from './components/company-profil/company-profil.component';
import { CompanyVideoComponent } from './components/company-video/company-video.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent},
  {path:"products/detail/:id",component:ProductDetailComponent},
  {path:"company-profile",component:CompanyProfilComponent},
  {path:"events",component:CompanyEventsComponent},
  {path:"videos",component:CompanyVideoComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

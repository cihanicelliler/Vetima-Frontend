import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { CompanyProfilComponent } from './components/company-profil/company-profil.component';
import { CompanyEventsComponent } from './components/company-events/company-events.component';
import { CompanyVideoComponent } from './components/company-video/company-video.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    NavbarComponent,
    ProductFilterPipe,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent,
    CompanyProfilComponent,
    CompanyEventsComponent,
    CompanyVideoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

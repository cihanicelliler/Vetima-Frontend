import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetail } from 'src/app/models/productDetail';
import { ProductService } from 'src/app/services/product.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataLoaded = false;
  productDetails: ProductDetail[];
  message: string;
  dataBrand = false;
  page = 1;
  pageSize=9;
  language=true;
  productImageBasePath = 'https://localhost:44329/uploads/';
  mobile=false;
  constructor(
    private productService: ProductService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute,
    private config: NgbCarouselConfig,
    private toastrService:ToastrService
  ) {
    this.config.interval = 5000;
    this.config.wrap = true;
    this.config.keyboard = false;
    this.config.pauseOnHover = false;
    this.config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
    this.getAllProductDetails();
    this.checkLanguage();
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }
  }

  getAllProductDetails() {
    this.productService.getProductsDetails().subscribe((response) => {
      this.productDetails = response.data;
      this.message = response.message;
      this.dataLoaded = true;
    });
  }
  ayakHastalik(){
    this.routerService.navigate(["/products/category/1"])
    if (this.language) {
      this.toastrService.success("Ayak Hastalıkları Ürünleri listeleniyor...")
    } else {
      this.toastrService.success("Listing Products for Hoof Diseases...")
    }
  }
  buzagiIshal(){
    this.routerService.navigate(["/products/category/2"])
    if (this.language) {
      this.toastrService.success("Buzağı İshal Ürünleri listeleniyor...")
    } else {
      this.toastrService.success("Listing Products for Calf Diarrhea...")
    }
  }
  uterus(){
    this.routerService.navigate(["/products/category/3"])
    if (this.language) {
      this.toastrService.success("Uterus Hastalıkları Ürünleri listeleniyor...")
    } else {
      this.toastrService.success("Listing Products for Uterus Diseases...")
    }
  }
  memeHastalik(){
    this.routerService.navigate(["/products/category/4"])
    if (this.language) {
      this.toastrService.success("Mastitis Ürünleri listeleniyor...")
    } else {
      this.toastrService.success("Listing Products for Mastitis Diseases...")
    }
  }
  checkLanguage() {
    if (localStorage.getItem('Language') == 'EN') {
      this.language=false;
    } else {
      this.language=true;
    }
  }
  goToDetail(id:number){
    this.routerService.navigate(["/products/detail/"+id]);
    window.scroll(0,0);
  }
  goTop(){
    window.scroll(0,0);
  }
}

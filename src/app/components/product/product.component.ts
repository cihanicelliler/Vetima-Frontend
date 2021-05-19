import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetail } from 'src/app/models/productDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  dataLoaded = false;
  filterText = '';
  productDetails: ProductDetail[];
  message: string;
  dataBrand = false;
  page = 1;
  pageSize = 9;
  collectionSize = 70;
  language=true;
  productImageBasePath = 'https://localhost:44329/uploads/';
  constructor(
    private productService: ProductService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductByBrand(params['categoryId']);
        this.checkLanguage();
      } else {
        this.getAllProductDetails();
        this.checkLanguage();
      }
    });
  }

  getAllProductDetails() {
    this.productService.getProductsDetails().subscribe((response) => {
      this.productDetails = response.data;
      this.message = response.message;
      this.dataLoaded = true;
    });
  }

  getProductByBrand(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.productDetails = response.data;
        this.collectionSize = this.productDetails.length;
        this.dataLoaded = true;
        this.dataBrand = true;
      });
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
    if (this.language) {
      this.toastrService.success("Detay Sayfasına Yönlendiriliyor...")
    } else {
      this.toastrService.success("Redirecting to Detail Page...")
    }
    window.scroll(0,0);
  }
  goTop(){
    window.scroll(0,0);
  }
}

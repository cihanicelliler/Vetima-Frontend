import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetail } from 'src/app/models/productDetail';
import { ProductService } from 'src/app/services/product.service';

declare var $:any
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productDetails: ProductDetail[];
  dataLoaded = false;
  language = true;
  productDetailId: number = 1;
  productImageBasePath = 'https://localhost:44329/uploads/';
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getProductById(params['id']);
        this.checkLanguage();
      }
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((response) => {
      this.productDetails = response.data;
      this.dataLoaded = true;
    });
  }
  checkLanguage() {
    if (localStorage.getItem('Language') == 'EN') {
      this.language = false;
    } else {
      this.language = true;
    }
  }
  setId(id: number) {
    this.productDetailId = id;
  }
}

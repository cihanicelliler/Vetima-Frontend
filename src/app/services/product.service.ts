import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductDetail } from '../models/productDetail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44329/api/products/"
  constructor(private httpClient:HttpClient) {   }

  getProductsDetails():Observable<ListResponseModel<ProductDetail>>{
    return this.httpClient.get<ListResponseModel<ProductDetail>>(this.apiUrl+"productdetails")
  }
  getProductsByCategory(categoryId: number): Observable<ListResponseModel<ProductDetail>> {
    let newPath = this.apiUrl + 'productsbycategoryid?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
  getProductById(id: number): Observable<ListResponseModel<ProductDetail>> {
    let newPath = this.apiUrl + 'productsbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
}

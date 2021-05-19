import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[];
  currentCategory:Category;
  selectedCategoryId:number;
  dataLoaded=false;
  language=true;
  mobile=false;
  constructor(private categoryService : CategoryService, private router:Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCategories()
    this.checkLanguage()
    if (window.screen.width <= 400) { // 768px portrait
      this.mobile = true;
    }
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((response)=>{
      this.categories=response.data;
      this.dataLoaded=true;
    })
  }
  setCurrentCategory(category:Category){
    this.currentCategory=category;
    if (this.language) {
      this.toastrService.success(this.currentCategory.categoryName+ " listeleniyor...")
    } else {
      this.toastrService.success("Listing "+this.currentCategory.categoryName_EN+ "...")
    }
    
    window.scroll(0,0);
  }
  setCurrentCategoryDefault(){
    this.currentCategory=null;
    window.scroll(0,0);
    if (this.language) {
      this.toastrService.success("Tüm ürünler listeleniyor...")
    } else {
      this.toastrService.success("Listing all products...")
    }
    return "list-group-item active shadow-lg"
  }

  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active shadow-lg"
    }else{
      return "list-group-item shadow-lg"
    }
  }

  getProducts(){
    this.router.navigate(["/products"])
  }
  checkLanguage() {
    if (localStorage.getItem('Language') == 'EN') {
      this.language=false;
    } else {
      this.language=true;
    }
  }

}

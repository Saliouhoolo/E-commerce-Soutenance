import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../admin/services/produit.service";
import {CategoryService} from "../../../admin/services/category.service";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  categories: any;
  produits: any;
  ImageDirectoryPath :any ="http://127.0.0.1:8081/"
  defaultImageCours= "assets/img/cart/cart-1.jpg"
  constructor(private produitService:ProduitService,private categoryService: CategoryService,private shopService:ShopService)
  {}
  ngOnInit(): void {
    this. produitList()
    this. CategoryList
  }
  CategoryList() {
    this.categoryService.liste().subscribe((response: any) => {
      this.categories = response;
    });
  }
  produitList() {
    this.produitService.liste().subscribe((response: any) => {
      this.produits = response;
    });
  }
  add(p:any){
    this.shopService.addCard(p)
    location.reload();
  }
}

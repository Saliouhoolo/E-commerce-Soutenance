import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../admin/services/produit.service";
import {ActivatedRoute} from "@angular/router";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-detail-produits',
  templateUrl: './detail-produits.component.html',
  styleUrls: ['./detail-produits.component.css']
})
export class DetailProduitsComponent implements OnInit {
  idProduit!: any;
  produit:any
  ImageDirectoryPath :any ="http://127.0.0.1:8081/"
  defaultImageCours= "assets/img/cart/cart-1.jpg"
  constructor(private produitService:ProduitService,private activatedRoute: ActivatedRoute,private shopService:ShopService) { }

  ngOnInit(): void {
    this.idProduit = this.activatedRoute.snapshot.paramMap.get('id')
    this.getProduit()
  }
  getProduit(){
    this.produitService.get(this.idProduit)
      .subscribe(
        (res:any)=>{
          this.produit = res
        },
        err => {
        })
  }
  add(p:any){
    this.shopService.addCard(p)
   // location.reload();
  }
}

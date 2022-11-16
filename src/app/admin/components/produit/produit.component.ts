import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  constructor(private produitService:ProduitService) { }
  List =[
    {"id":"1","produits":"","libelle":"CAROTE","description":"Bonne teneur en vitamines du groupe B", "quantite":"100kg","Prix_vente":"1000FCFA/kg","categorie":"légumes racines"}
  ]
  ngOnInit(): void {
   // this.lister()
  }
  lister(){
    this.produitService.liste().subscribe(
      (res:any)=>{
    this.List = res
      },
      err => {
        console.log(err)
      })
  }
  edit(){

  }
  add(){}
  delete(){}

}

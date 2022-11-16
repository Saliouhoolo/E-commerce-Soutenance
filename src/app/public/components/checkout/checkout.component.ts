import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/admin/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkoutService:CheckoutService) { }
  List =[
    {"id":"1","produits":"","libelle":"Fruits","description":"Tomate", "quantite":"450kg", "Prix_regulier":"100FCFA","Prix_vente":"96FCFA","categorie":"Fruits"}
  ]
  ngOnInit(): void {
   // this.lister()
  }
  lister(){
    this.checkoutService.liste().subscribe(
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

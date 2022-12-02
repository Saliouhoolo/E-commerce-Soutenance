import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/admin/services/checkout.service';
import {AuthService} from "../../../core/services/auth.service";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  produit!:any
  total= 0
  user : any | undefined;
  ImageDirectoryPath :any ="http://127.0.0.1:8081/"
  defaultImageCours ="assets/assets/images/produites/4by3/08.jpg"
  constructor( private authService: AuthService, private  shopService: ShopService) {
    // @ts-ignore
    this.produit = JSON.parse(localStorage.getItem("cart"));
    ;
  }
  ngOnInit() {
    this.user= this.authService.getCurrentUser()
    this.produit.forEach((obj:any) => {
      this.total  += Number(obj.prix);
    })
  }
  deleteItemCard(id:any){
    this.shopService.deleteItemCard(id)
    this.reload()

  }
  deleteCard(){
    this.shopService.deleteCard()
    this.reload()
  }
  reload(){
    location.reload();
  }

}

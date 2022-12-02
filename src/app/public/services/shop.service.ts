import { Injectable } from '@angular/core';
import {catchError} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  apiUrl = "http://localhost:8081/api/"
  constructor(private http:HttpClient,private router: Router,
  ) { }

  addCard(produits:any){
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
    }
    let produit ={
      id:produits.id,
      libelle:produits.libelle,
      qte:produits.qte,
      prix:produits.prix,
      category:produits.category,
      description:produits.description,
      image:produits.image
    }
    // @ts-ignore
    let cart = JSON.parse(localStorage.getItem("cart"));
    if(cart.length === 0){
      cart.push(produit);
      localStorage.setItem("cart", JSON.stringify(cart));
    }else{
      let res =  cart.findIndex((item:any) => item?.id === produit.id);
      if(res === -1){
        cart.push(produit);
        localStorage.setItem("cart", JSON.stringify(cart));
      }else{
        this.deleteItemCard(produit.id)
        let produitQte =  cart.filter((item:any) => item?.id === produit.id);
        console.log(produitQte)
        // @ts-ignore
        let cart2 = JSON.parse(localStorage.getItem("cart"));
        produit.qte=produitQte[0].qte+1
        cart2.push(produit)
        localStorage.setItem("cart", JSON.stringify(cart2));
      }
    }
  }
  getCard(){
    // @ts-ignore
    return JSON.parse(localStorage.getItem("cart"));
  }
  countCard(){
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
    }
    // @ts-ignore
    let cart = JSON.parse(localStorage.getItem("cart"));
    const sum = cart.reduce((sum:number, current:any) => sum + current.qte, 0);
    return sum
  }
  deleteCard(){
    // @ts-ignore
    localStorage.removeItem("cart");
    /* if(!localStorage.getItem("cart")){
       localStorage.setItem("cart", "[]");
     }*/
  }
  deleteItemCard(id:any){
    // @ts-ignore
    let cart = JSON.parse(localStorage.getItem("cart"));
    // @ts-ignore
    let res =  cart.findIndex((item:any) => item?.id === id);
    cart.splice(res, 1);
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
    if(!localStorage.getItem("cart")){
      localStorage.setItem("cart", "[]");
    }
  }

  addCommande(value: any) {
    return   this.http.post<any>(this.apiUrl + 'commande',value).pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}

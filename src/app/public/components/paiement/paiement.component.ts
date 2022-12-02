import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {ShopService} from "../../services/shop.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  commandeForm!: FormGroup;
  editMode =false
  isSubmitted = false;
  produit!:any
  total= 0
  user : any | undefined;
  ImageDirectoryPath :any ="http://127.0.0.1:8081/"
  defaultImageCours ="assets/assets/images/produites/4by3/08.jpg"
   isMessage!: boolean;
   message!: string;
  constructor( private authService: AuthService, private  shopService: ShopService,private fb: FormBuilder,private router:Router) {
    // @ts-ignore
    this.produit = JSON.parse(localStorage.getItem("cart"));
    this.createForm()
  }
  get formControls() {
    return this.commandeForm.controls;
  }
  createForm() {
    this.commandeForm= this.fb.group({
      tel: ['',Validators.required],
      adresse: ['',Validators.required],
      prix: [this.total,Validators.required],
      produits: [this.produit,Validators.required]
    });
  }
  ngOnInit() {
    this.user= this.authService.getCurrentUser()
    this.produit.forEach((obj:any) => {
      this.total  += Number(obj.prix);
    })
  }
  addCommande(){

    this.isSubmitted = true;
    if (this.commandeForm.invalid) {
      console.log(this.commandeForm.value)
      return;
    }
    this.shopService.addCommande(this.commandeForm.value).subscribe((response:any)=>{
      this.commandeForm.value.reset
      this.message = response.message
      this.isMessage = true
      setTimeout(()=>{
        this.isMessage = false
        this.deleteCard()
        this.router.navigate(["/public/home"])

      },8000)
    })
  }
  deleteItemCard(id:any){
    this.shopService.deleteItemCard(id)
    this.reload()

  }
  deleteCard(){
    this.shopService.deleteCard()
  }
  reload(){
    location.reload();
  }


}

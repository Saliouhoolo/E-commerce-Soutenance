import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";

import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { ProduitsComponent } from './components/produits/produits.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { DetailProduitsComponent } from './components/detail-produits/detail-produits.component';
import { CheckoutComponent } from './components/checkout/checkout.component';





@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ShopComponent,
    ProduitsComponent,
    CategorieComponent,
    ListCategorieComponent,
    CheckoutComponent,
    PaiementComponent,
    DetailProduitsComponent,
   
   
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }

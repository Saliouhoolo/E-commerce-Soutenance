import { NgModule } from '@angular/core';
import {PublicComponent} from "./public.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {ShopComponent} from "./components/shop/shop.component";
import { ProduitsComponent } from './components/produits/produits.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ListCategorieComponent } from './categorie/list-categorie/list-categorie.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { DetailProduitsComponent } from './components/detail-produits/detail-produits.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component:HomeComponent },
      { path: 'contact', component:ContactComponent },
      { path: 'about', component:AboutComponent },
      { path: 'shop', component:ShopComponent },
      { path: 'produits', component:ProduitsComponent },
      { path: 'categorie', component:CategorieComponent },
      { path: 'list', component:ListCategorieComponent },
      { path: 'checkout', component:CheckoutComponent },
      { path: 'paiement', component:PaiementComponent },
      { path: 'detail', component:DetailProduitsComponent},
      

    ],
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PublicRoutingModule { }

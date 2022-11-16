import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingMoule} from "./admin-routing";
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProduitComponent } from './components/produit/produit.component';
import { CategoryComponent } from './components/category/category.component';
import { ShopComponent } from './components/shop/shop.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ProfileComponent } from './components/profile/profile.component';




@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    UsersComponent,
    ProduitComponent,
    CategoryComponent,
    ShopComponent,
    CommandeComponent,
    ProfileComponent,
 
  ],
  imports: [
    CommonModule,
    AdminRoutingMoule,
    SharedModule
  ]
})
export class AdminModule { }

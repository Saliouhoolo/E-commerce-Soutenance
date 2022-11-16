import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { CategoryComponent } from './components/category/category.component';
import {AdminComponent} from "./admin.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import { ProduitComponent } from './components/produit/produit.component';
import { UsersComponent } from './components/users/users.component';
import { ShopComponent } from './components/shop/shop.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', component:AdminComponent, pathMatch: 'full' },
      { path: 'dashboard', component:DashboardComponent},
      { path: 'users', component:UsersComponent},
      { path: 'category', component:CategoryComponent},
      { path: 'produit', component:ProduitComponent},
      { path: 'shop', component:ShopComponent},
      { path: 'commande', component:CommandeComponent},
      { path: 'profile', component:ProfileComponent},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingMoule { }

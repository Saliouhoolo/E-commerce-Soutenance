import { NgModule } from '@angular/core';
import {PublicComponent} from "./public.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";
import {ShopComponent} from "./components/shop/shop.component";


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
    ],
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PublicRoutingModule { }

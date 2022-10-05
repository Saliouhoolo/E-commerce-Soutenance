import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {PublicRoutingModule} from "./public-routing.module";
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }

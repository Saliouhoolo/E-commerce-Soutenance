import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component";
import {AdminRoutingMoule} from "./admin-routing";
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingMoule,
    SharedModule
  ]
})
export class AdminModule { }

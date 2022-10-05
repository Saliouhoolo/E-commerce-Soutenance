import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConnectedComponent} from "./connected.component";
import {ConnectedRoutingModule} from "./connected-routing.module";



@NgModule({
  declarations: [
    ConnectedComponent
  ],
  imports: [
    CommonModule,
    ConnectedRoutingModule
  ]
})
export class ConnectedModule { }

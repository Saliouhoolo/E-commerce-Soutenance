import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ConnectedComponent} from "./connected.component";

const routes: Routes = [
  {
    path: '',
    component: ConnectedComponent,
    children: [
      { path: '', component:ConnectedComponent, pathMatch: 'full' },
    ],
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectedRoutingModule { }

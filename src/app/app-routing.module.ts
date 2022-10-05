import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./core/components/login/login.component";
import {RegisterComponent} from "./core/components/register/register.component";

const routes: Routes = [
  {
    path: 'public',
    loadChildren:  () => import('./public/public.module').then(x => x.PublicModule),
    data: { preload: false }
  },
  {
    path: 'connected',
    loadChildren:  () => import('./connected/connected.module').then(x => x.ConnectedModule),
    data: { preload: false },
   // canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren:  () => import('./admin/admin.module').then(x => x.AdminModule),
    data: { preload: false },
   // canActivate: [AuthGuard]
  },
  { path: '',
    redirectTo: '/public/home',
    pathMatch: 'full'
  },
  /* {
     path: '**',
     component: NotFoundComponent
   },*/
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

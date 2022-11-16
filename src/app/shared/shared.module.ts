import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthService } from '../core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        SidebarComponent,
        HeaderComponent,

    ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    HttpClientModule
  ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers:[
      AuthService

    ]

})
export class SharedModule { }

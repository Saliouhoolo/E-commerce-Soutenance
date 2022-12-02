import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {ShopService} from "../../../public/services/shop.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   number: any;

  constructor( private authService: AuthService,private shopService:ShopService ) {
    this.number = this.shopService.countCard()
  }
  isLoggedIn = this.authService.isLoggedIn()
  user : any | undefined;
  ngOnInit() {
    this.user= this.authService.getCurrentUser()
  }
  signOut(){
    this.authService.signOut().then()
  }

}

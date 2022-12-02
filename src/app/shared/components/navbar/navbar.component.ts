import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {ShopService} from "../../../public/services/shop.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService ) {
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

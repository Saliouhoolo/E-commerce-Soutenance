import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authService: AuthService ) { }
  isLoggedIn = this.authService.isLoggedIn()
  user : any | undefined;
  ngOnInit() {
    this.user= this.authService.getCurrentUser()
  }
  signOut(){
    this.authService.signOut().then()
  }

}

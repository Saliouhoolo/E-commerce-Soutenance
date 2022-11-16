import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

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

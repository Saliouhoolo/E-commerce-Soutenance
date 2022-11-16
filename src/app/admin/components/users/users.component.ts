import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private usersService:UsersService) { }
  List =[
    {"id":"1","nom":"Thioye","prenom":"Matar","email":"mthioye@gmail.com","password":"admin2020","tel":"00221781214391","role":"admin","confirmpassword":"........."},
    {"id":"2","nom":"DER","prenom":"Moustahpa","email":"mstDrISI@gmail.com","password":"DERISI2021","tel":"00221773655540","role":"EXPERT","confirmpassword":"......."},
    {"id":"3","nom":"THIAM","prenom":"ANTA","email":"ant2010@gmail.com","password":"ISI2022","tel":"0022177551012","role":"VENDEUR","confirmpassword":".........."}
  ]
    ngOnInit(): void {
      this.lister()
    }
    lister(){
      this.usersService.liste().subscribe(
        (res:any)=>{
      this.List = res
        },
        err => {
          console.log(err)
        })
    }
    edit(){
  
    }
    add(){}
    delete(){}
  
}

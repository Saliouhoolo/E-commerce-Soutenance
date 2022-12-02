import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor(private commandeService:CommandeService) { }
List :any
  ngOnInit(): void {
    this.lister()
  }
  lister(){
    this.commandeService.liste().subscribe(
      (res:any)=>{
    this.List = res
      },
      err => {
        console.log(err)
      })
  }
  changeStatus(id:number){
    this.commandeService.changeStatus(id).subscribe(
      (res:any)=>{
        this.lister()
      },
      err => {
        console.log(err)
      })
  }

}
